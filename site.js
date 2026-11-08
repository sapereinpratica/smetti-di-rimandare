const settings = window.JOURNAL || {};

for (const [key, selector] of [
  ["prezzo", "[data-price]"],
  ["formato", "[data-format]"],
  ["testimonianza", "[data-testimonial]"]
]) {
  const value = settings[key]?.trim();
  if (value) {
    const element = document.querySelector(selector);
    element.textContent = value;
    element.hidden = false;
  }
}

if (/^https?:\/\//i.test(settings.checkout?.trim() || "")) {
  try {
    const url = new URL(settings.checkout.trim());
    const checkout = document.querySelector("[data-checkout]");
    checkout.href = url.href;
    checkout.hidden = false;
    document.querySelector("[data-checkout-note]").hidden = true;
    document.querySelector("[data-fallback]").hidden = true;
  } catch {
    // Un indirizzo incompleto lascia attiva l’anteprima.
  }
}
