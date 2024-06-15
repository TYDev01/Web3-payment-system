document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const connectButton = document.getElementById("connectButton");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  let isConnected = false; // Replace with actual connection status

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  connectButton.addEventListener("click", function () {
    if (isConnected) {
      // Handle token transfer
      handleTokenTransfer();
    } else {
      // Show connect wallet prompt
      connectWallet();
    }
  });

  function connectWallet() {
    // Implement wallet connection logic
    console.log("Connect Wallet");
  }

  async function handleTokenTransfer() {
    // Implement token transfer logic
    console.log("Transfer Tokens");
  }
});



 // Sample data for demonstration
        const data = [{
            image: 'public/letit.jpg',
            title: 'LETIT',
            action: "Letit is airdropping 10 LETIT tokens to users who complete the airdrop tasks. Chat with their Telegram bot and complete the social tasks to be eligible to receive the tokens. The tokens will be credited after the token gets listed on a centralized exchange.",
            value: 'n/a',
            status: 'confirmed',
        },
        {
            image: 'public/lightlink.jpg',
            title: 'LIGHTLINK',
            action: "Lightlink has confirmed to launch an own token called “LL” in the future and has allocated 6% of the supply to airdrop. Connect your Goerli wallet to their testnet bridge and make transactions to likely become eligible for an airdrop.",
            value: 'n/a',
            status: 'confirmed',
        },
            // Add more items here as needed
        ];

        // Function to handle token click
        function handleTokenClick(token) {
            const modal = document.getElementById('modal');
            const modalContent = document.getElementById('modalContent');

            // Generate HTML for modal content
            const html = `
                <div class="mb-4">
                    <h3 class="text-lg font-semibold">${token.title}</h3>
                    <p class="text-sm text-gray-600">${token.action}</p>
                    <p class="text-xs text-gray-500 mt-2">Value: ${token.value}</p>
                </div>
                <div class="text-green-500 italic">${token.status}</div>
            `;

            modalContent.innerHTML = html;
            modal.classList.remove('hidden');

            // Close modal on clicking the close button
            const closeModalBtn = document.getElementById('closeModal');
            closeModalBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }