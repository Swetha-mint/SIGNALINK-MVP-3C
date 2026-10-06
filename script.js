const $ = id => document.getElementById(id);
const config = $("config");
const paramsOut = $("params");
const status = $("status");

const environments = {
  default: {
    label: "GENERAL",
    mode: "standard",
    message: "Standard communication vocabulary."
  },
  icu_bed: {
    label: "ICU BED",
    mode: "haptic",
    message: "Prioritize urgent and tactile communication events."
  },
  retail_counter: {
    label: "RETAIL COUNTER",
    mode: "visual",
    message: "Prioritize concise customer-facing communication."
  }
};

function parse() {
  try {
    const u = new URL($("url").value);
    const p = Object.fromEntries(u.searchParams.entries());
    const env = p.env || "default";
    const cfg = environments[env] || environments.default;

    config.innerHTML = "";

    for (const [k, v] of Object.entries({
      environment: cfg.label,
      mode: p.mode || cfg.mode,
      behavior: cfg.message
    })) {
      const d = document.createElement("div");
      d.className = "item";
      d.innerHTML = "<small>" + k.toUpperCase() + "</small><strong>" + v + "</strong>";
      config.appendChild(d);
    }

    paramsOut.textContent = JSON.stringify(p, null, 2);
    status.textContent =
      env in environments
        ? "Context parsed locally."
        : "Unknown environment: safe default applied.";

    return p;
  } catch (e) {
    status.textContent = "Invalid URL.";
    config.innerHTML = "";
    paramsOut.textContent = "[ invalid ]";
  }
}

function openUrl() {
  try {
    const url = new URL($("url").value);

    if (!/^https?:$/.test(url.protocol)) {
      status.textContent = "Only HTTP/HTTPS URLs can be opened.";
      return;
    }

    window.open(url.href, "_blank", "noopener");
    status.textContent = "Opening URL in a new tab.";
  } catch (e) {
    status.textContent = "Cannot open: invalid URL.";
  }
}

$("parse").onclick = parse;
$("open").onclick = openUrl;

parse();