var url = window.location.href;
if (url.includes("pull") && url.endsWith("files")) {
  window.location.href = url + "?w=1"; // Append w=1 to ignore whitespace changes
}

