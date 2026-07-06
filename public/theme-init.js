// Runs before React mounts (classic script = synchronous, blocks parsing).
// Applies the saved theme so there's no flash of light mode on popup open.
// Kept as a file (not inline) because MV3's CSP forbids inline scripts.
if (localStorage.getItem("mode") === "dark") {
  document.documentElement.classList.add("dark");
}
