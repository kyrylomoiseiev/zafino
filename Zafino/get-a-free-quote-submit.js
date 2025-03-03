document.getElementById('phone-number').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, ''); // Remove non-digits

  if (value.startsWith("38")) {
      value = value.substring(2); // Remove leading "38" if included
  }

  let formatted = "+38 ";
  if (value.length > 0) formatted += "(" + value.substring(0, 3);
  if (value.length >= 4) formatted += ") " + value.substring(3, 6);
  if (value.length >= 7) formatted += "-" + value.substring(6, 10);

  e.target.value = formatted;
});