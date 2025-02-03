document.getElementById("login").addEventListener("submit", function(e) {
    e.preventDefault();
    // Assuming a successful login, hide the login form and show the checkout form.
    document.getElementById("login-form").style.display = "none";
    document.getElementById("checkout-form").style.display = "block";
});

const assetCheckboxes = document.querySelectorAll(".asset");
const assetDetailsDiv = document.getElementById("asset-details");
const checkoutListDiv = document.getElementById("checkout-list");

assetCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            assetDetailsDiv.style.display = "block";
        } else {
            assetDetailsDiv.style.display = "none";
            document.getElementById("model").value = '';
            document.getElementById("asset-tag").value = '';
            document.getElementById("quantity").value = '';
            document.getElementById("serial-number").value = '';
        }
    });
});

document.getElementById("checkout").addEventListener("submit", function(e) {
    e.preventDefault();
    let checkoutItems = [];
    assetCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const model = document.getElementById("model").value;
            const assetTag = document.getElementById("asset-tag").value;
            const quantity = document.getElementById("quantity").value;
            const serialNumber = document.getElementById("serial-number").value;
            checkoutItems.push({
                asset: checkbox.value,
                model,
                assetTag,
                quantity,
                serialNumber
            });
        }
    });

    // Display checkout items
    checkoutListDiv.innerHTML = '';
    checkoutItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <p><strong>Asset:</strong> ${item.asset}</p>
            <p><strong>Model:</strong> ${item.model}</p>
            <p><strong>Asset Tag:</strong> ${item.assetTag}</p>
            <p><strong>Quantity:</strong> ${item.quantity}</p>
            <p><strong>Serial Number:</strong> ${item.serialNumber}</p>
            <button type="button" onclick="removeCheckoutItem(this)">Remove</button>
        `;
        checkoutListDiv.appendChild(itemDiv);
    });
});

function removeCheckoutItem(button) {
    button.parentElement.remove();
}

document.getElementById("print-btn").addEventListener("click", function() {
    // Simulate sending the information to an email. This is a mock function.
    alert("PDF Sent to the User and Manager (functionality not implemented in this mock).");
});

function showModal() {
  document.getElementById('assetModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('assetModal').style.display = 'none';
}

// Handle asset checkbox clicks
document.querySelectorAll('.asset-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const assetType = this.dataset.type;
    
    if (this.checked) {
      currentAssetType = assetType;
      showModal();
    } else {
      delete assetsData[assetType];
      updateSummary();
    }
  });
});

// Handle form submission inside modal
document.getElementById('assetForm').addEventListener('submit', function(e) {
  e.preventDefault();
  assetsData[currentAssetType] = {
    model: document.getElementById('model').value,
    quantity: document.getElementById('quantity').value,
    serial: document.getElementById('serial').value,
    tag: document.getElementById('tag').value
  };
  updateSummary();
  closeModal();
});

// Update summary when assets are selected
function updateSummary() {
  const summaryDiv = document.getElementById('selectedAssets');
  summaryDiv.innerHTML = '<h3>Selected Items</h3>';
  
  for (const [asset, details] of Object.entries(assetsData)) {
    summaryDiv.innerHTML += `
      <div class="asset-details">
        <strong>${asset.toUpperCase()}</strong><br>
        Model: ${details.model} | Quantity: ${details.quantity} | Serial: ${details.serial} | Tag: ${details.tag}
      </div>
    `;
  }
}

// Login Page Script
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'felixmadjos@gmail.com' && password === 'NICE') {
    window.location.href = 'success.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
});

