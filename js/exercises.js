/* exercises.js – Interactive exercise widget for Matteboken Bookdown */
(function () {
  "use strict";

  function init() {
    document.querySelectorAll(".exercise-section").forEach(function (el) {
      var sid = el.getAttribute("data-section-id");
      var exercises = window.exerciseData && window.exerciseData[sid];
      if (exercises && exercises.length > 0) {
        renderSection(el, exercises);
      }
    });
  }

  /* ── Rendering ────────────────────────────────────────────────────────── */

  function renderSection(container, exercises) {
    var html = '<div class="ex-container">';
    exercises.forEach(function (ex, i) {
      html += renderCard(ex, i);
    });
    html += "</div>";
    container.innerHTML = html;

    exercises.forEach(function (ex, i) {
      attachHandlers(container, ex, i);
    });

    typesetMath(container);
  }

  function renderCard(ex, i) {
    var imgHTML = ex.image
      ? '<img src="' + ex.image + '" alt="" class="ex-img">'
      : "";

    var inputHTML;
    if (ex.inputtype === "button") {
      var q = Object.values(ex.multichoice)[0];
      var btns = q.options
        .map(function (opt, j) {
          var isCorrect = opt === q.correct ? "1" : "0";
          return (
            '<button class="ex-choice" data-idx="' +
            j +
            '" data-correct="' +
            isCorrect +
            '">' +
            opt +
            "</button>"
          );
        })
        .join("");
      inputHTML =
        '<div class="ex-choices" id="ex-choices-' + i + '">' + btns + "</div>";
    } else {
      var fields = Object.entries(ex.expectedanswer)
        .map(function (entry) {
          var label = entry[0];
          var val = entry[1];
          var fmt = ex.answerformat
            ? '<span class="ex-fmt">' + ex.answerformat + "</span>"
            : "";
          return (
            '<div class="ex-field-row">' +
            '<label class="ex-field-label">' +
            label +
            ":</label>" +
            '<input type="text" class="ex-field-input" data-expected="' +
            val +
            '" autocomplete="off" spellcheck="false">' +
            fmt +
            "</div>"
          );
        })
        .join("");
      inputHTML =
        '<div class="ex-fields" id="ex-fields-' +
        i +
        '">' +
        fields +
        '<button class="ex-submit" data-exidx="' +
        i +
        '">Kontrollera svar</button>' +
        "</div>";
    }

    return (
      '<div class="ex-card" id="ex-card-' +
      i +
      '">' +
      '<div class="ex-header"><span class="ex-num">' +
      ex.name +
      "</span></div>" +
      '<div class="ex-question">' +
      ex.exercise +
      "</div>" +
      imgHTML +
      inputHTML +
      '<div class="ex-feedback" id="ex-fb-' +
      i +
      '" style="display:none"></div>' +
      '<div class="ex-retry" id="ex-retry-' +
      i +
      '" style="display:none">' +
      '<button class="ex-retry-btn" data-exidx="' +
      i +
      '">Försök igen</button>' +
      "</div>" +
      "</div>"
    );
  }

  /* ── Event handlers ───────────────────────────────────────────────────── */

  function attachHandlers(container, ex, i) {
    if (ex.inputtype === "button") {
      var btns = container.querySelectorAll("#ex-choices-" + i + " .ex-choice");
      btns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var isCorrect = this.getAttribute("data-correct") === "1";
          btns.forEach(function (b) {
            b.disabled = true;
          });
          this.classList.add(isCorrect ? "ex-correct" : "ex-incorrect");
          if (!isCorrect) {
            btns.forEach(function (b) {
              if (b.getAttribute("data-correct") === "1")
                b.classList.add("ex-correct");
            });
          }
          showFeedback(container, ex, i, isCorrect);
        });
      });
    } else {
      var submitBtn = container.querySelector(
        "#ex-fields-" + i + " .ex-submit"
      );
      if (submitBtn) {
        submitBtn.addEventListener("click", function () {
          var inputs = container.querySelectorAll(
            "#ex-fields-" + i + " .ex-field-input"
          );
          var allCorrect = true;
          inputs.forEach(function (inp) {
            var expected = normalise(inp.getAttribute("data-expected"));
            var given = normalise(inp.value);
            if (given !== expected) {
              allCorrect = false;
              inp.classList.add("ex-field-wrong");
            } else {
              inp.classList.add("ex-field-ok");
            }
            inp.disabled = true;
          });
          this.disabled = true;
          showFeedback(container, ex, i, allCorrect);
        });
      }
    }

    var retryBtn = container.querySelector("#ex-retry-" + i + " .ex-retry-btn");
    if (retryBtn) {
      retryBtn.addEventListener("click", function () {
        resetCard(container, ex, i);
      });
    }
  }

  /* ── Feedback ─────────────────────────────────────────────────────────── */

  function showFeedback(container, ex, i, isCorrect) {
    var fb = container.querySelector("#ex-fb-" + i);
    var retry = container.querySelector("#ex-retry-" + i);
    var msg = isCorrect ? ex.correct.message : ex.error.message;
    var cls = isCorrect ? "ex-fb-ok" : "ex-fb-err";
    fb.innerHTML = '<div class="ex-fb-box ' + cls + '">' + msg + "</div>";
    fb.style.display = "block";
    retry.style.display = "block";
    typesetMath(fb);
  }

  /* ── Reset ────────────────────────────────────────────────────────────── */

  function resetCard(container, ex, i) {
    var fb = container.querySelector("#ex-fb-" + i);
    var retry = container.querySelector("#ex-retry-" + i);
    fb.style.display = "none";
    fb.innerHTML = "";
    retry.style.display = "none";

    if (ex.inputtype === "button") {
      var btns = container.querySelectorAll(
        "#ex-choices-" + i + " .ex-choice"
      );
      btns.forEach(function (b) {
        b.disabled = false;
        b.classList.remove("ex-correct", "ex-incorrect");
      });
    } else {
      var inputs = container.querySelectorAll(
        "#ex-fields-" + i + " .ex-field-input"
      );
      inputs.forEach(function (inp) {
        inp.value = "";
        inp.disabled = false;
        inp.classList.remove("ex-field-ok", "ex-field-wrong");
      });
      var sb = container.querySelector("#ex-fields-" + i + " .ex-submit");
      if (sb) sb.disabled = false;
    }
  }

  /* ── Helpers ──────────────────────────────────────────────────────────── */

  function normalise(s) {
    if (s == null) return "";
    return String(s)
      .toLowerCase()
      .trim()
      .replace(/,/g, ".")
      .replace(/\s+/g, "");
  }

  function typesetMath(el) {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([el]).catch(function () {});
    }
  }

  /* ── Boot ─────────────────────────────────────────────────────────────── */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
