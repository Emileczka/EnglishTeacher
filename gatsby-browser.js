export const onInitialClientRender = () => {
  let allImgsAreLoaded = () =>
    Array.from(document.getElementsByTagName("img")).every((e) => e.complete);

  function onLoad(fn, fallback, retries = 100, interval = 30) {
    if (document.readyState === "complete" && allImgsAreLoaded()) {
      console.log("Loaded!");
      fn();
    } else {
      if (retries > 0)
        setTimeout(() => onLoad(fn, fallback, retries - 1, interval), interval);
      else if (fallback) {
        console.log("Fallback!");
        fallback();
      }
    }
  }

  onLoad(
    () => {
      document.getElementById("___loader").style.opacity = "0";
      document.getElementById("___gatsby").style.opacity = 1;
    },
    () => {
      document.getElementById("___loader").style.opacity = "0";
      document.getElementById("___gatsby").style.opacity = 1;
    }
  );
};
