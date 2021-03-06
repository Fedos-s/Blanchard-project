document.addEventListener("DOMContentLoaded", function () {
  let selector = document.querySelector("input[type='tel']");
  let e = new Inputmask("+7 (999) 999-99-99");

  e.mask(selector);

  let validateForms = function (selector, rules) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form) {
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log("Отправлено");
            }
          }
        };

        xhr.open("POST", "mail.php", true);
        xhr.send(formData);

        form.reset();
      },
    });
  };

  validateForms(
    ".form",
    {
      name: { required: true, minLength: 2, maxLength: 20 },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },
  );
});
