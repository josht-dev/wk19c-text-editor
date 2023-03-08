const butInstall = document.getElementById('buttonInstall');

// USED https://web.dev/customize-install/ TO TRY TO GET THIS WORKING
// NOT SURE IF THIS IS A LINUX-CHROME ISSUE
// THE 'INSTALL' IS NOT SOMETHING I CAN FIND IN MY BROWSER
// TODO - GET THIS WORKING

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallPromotion();

  // Hide install button
  //butInstall.style.display = 'none';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {


  //hideInstallPromotion();
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;

  /*
  const event = window.deferredPrompt;

  if (!event) {
    return;
  }

  event.prompt();
  window.deferredPrompt = null;
  // Toggle install button
  //butInstall.style.display = 'initial';
  */
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  //hideInstallPromotion();
  deferredPrompt = null;

});
