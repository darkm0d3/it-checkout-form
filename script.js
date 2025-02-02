// Login function to show the checkout page
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Simple validation (you can add actual logic here)
  if (username === 'admin' && password === 'password123') {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'block';
  } else {
    alert('Invalid credentials');
  }
}

// Show the details form when the laptop checkbox is selected
function toggleAssetForm() {
  const laptopChecked = document.getElementById('laptop').checked;
  const laptopDetails = document.getElementById('laptopDetails');
  if (laptopChecked) {
    laptopDetails.style.display = 'block';
  } else {
    laptopDetails.style.display = 'none';
  }
}

// Add the selected item to the checkout form
function addToCheckout() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const department = document.getElementById('department').value;
  const manager = document.getElementById('manager').value;
  const empNumber = document.getElementById('empNumber').value;

  const checkoutDetails = `Employee: ${firstName} ${lastName}, Department: ${department}, Manager: ${manager}, Employee Number: ${empNumber}`;

  let selectedAssets = '';
  if (document.getElementById('laptop').checked) {
    const model = document.getElementById('laptopModel').value;
    const assetTag = document.getElementById('assetTag').value;
    const quantity = document.getElementById('quantity').value;
    const serialNumber = document.getElementById('serialNumber').value;
    selectedAssets = `Laptop - Model: ${model}, Asset Tag: ${assetTag}, Quantity: ${quantity}, Serial Number: ${serialNumber}`;
  }

  document.getElementById('checkoutDetails').innerText = `${checkoutDetails}\nSelected Asset: ${selectedAssets}`;
}

// Clear the checkout form
function clearCheckout() {
  document.getElementById('checkoutDetails').innerText = '';
  document.getElementById('employeeForm').reset();
}

// Generate a PDF of the checkout information
function generatePDF() {
  const doc = new jsPDF();
  const content = document.getElementById('checkoutDetails').innerText;
  doc.text(content, 10, 10);
  doc.save('checkout-info.pdf');
}
