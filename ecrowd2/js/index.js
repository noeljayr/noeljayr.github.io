function setFocus(on) {
  var element = document.activeElement;
  if (on) {
    setTimeout(function () {
      element.parentNode.classList.add("focus");
    });
  } else {
    let box = document.querySelector(".input-box");
    box.classList.remove("focus");
    $("input").each(function () {
      var $input = $(this);
      var $parent = $input.closest(".input-box");
      if ($input.val()) $parent.addClass("focus");
      else $parent.removeClass("focus");
    });
  }
}

const addForm = document.querySelector(".product-form");
const addBtn = document.querySelector(".add-product");
const cancelBtn = document.querySelector(
  ".btn-container button[type = 'reset']"
);
// const overlay = document.querySelector(".overlay");

addBtn.addEventListener("click", () => {
  addForm.classList.add("product-form-active");
  // overlay.classList.add("overlay-active");
});

cancelBtn.addEventListener("click", () => {
  addForm.classList.remove("product-form-active");
  const inputs = document.querySelectorAll(".input-box");
  inputs.forEach((input) => {
    input.classList.remove("focus");
  });
});

function sendData() {
  var productName = $("input[name=pname]").val();
  var quantity = $("input[name=quantity]").val();
  var price = $("input[name=price]").val();
  var description = $("input[name=description]").val();
  var category = $("input[name=category]").val();


  if (
    productName != "" &&
    quantity != "" &&
    price != "" &&
    description != "" &&
    category
  ) {
    var formData = {
      productName: productName,
      quantity: quantity,
      price: price,
      description: description,
      category: category,
    };
    // $('#displayMassage').html('<span class = " wait">  Please wait...</span>');

    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.classList.add("processing");
    submitBtn.innerHTML = `
              <svg class="spinner" viewBox="0 0 50 50">
                  <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
              </svg>
          `;

    window.setTimeout(() => {
      addForm.classList.remove("product-form-active");
      submitBtn.classList.remove("processing");
      submitBtn.innerHTML = "Add";
      const inputs = document.querySelectorAll(".product-form .input-box");
      inputs.forEach((input) => {
        input.classList.remove("focus");
        input.querySelector("input").value = "";
      });
    }, 1000);

    $.ajax({
      url: "includes/setProducts.includes.php",
      type: "POST",
      data: formData,
      success: function (response) {
        var res = JSON.parse(response);
        if (res.success == true) {
          $("#displayMassage").html(
            '<span class = "successful">  Form submited successful</span>'
          );
          $("#products-table").html(res.code);
        }
      },
    });
  } else {
    const errorContainer = document.querySelector(".message-container");
    errorContainer.classList.add("message-container-active");
    errorContainer.classList.add("message-error");
    window.setTimeout(() => {
      errorContainer.classList.remove("message-container-active");
      errorContainer.classList.remove("message-error");
    }, 3000);
    $("#displayMassage").html(
      '<span class = "fill">  Please fill all fields</span>'
    );
  }
}
function editData() {
  var productName = $("input[name=pname2]").val();
  var quantity = $("input[name=quantity2]").val();
  var price = $("input[name=price2]").val();
  var description = $("input[name=description2]").val();
  var category = $("input[name=category2]").val();
  var edit_id = $("input[name=id2]").val();

 


  if (
    productName != "" &&
    quantity != "" &&
    price != "" &&
    description != "" &&
    category != ""
  ) {
    var formData = {
      productName: productName,
      quantity: quantity,
      price: price,
      description: description,
      category: category,
      edit_id: edit_id,
    };
    // $('#displayMassage').html('<span class = " wait">  Please wait...</span>');

    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.classList.add("processing");
    submitBtn.innerHTML = `
              <svg class="spinner" viewBox="0 0 50 50">
                  <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
              </svg>
          `;

    window.setTimeout(() => {
      editForm.classList.remove("edit-form-active");
      submitBtn.classList.remove("processing");
      submitBtn.innerHTML = "Save";
      const inputs = document.querySelectorAll(".edit-form .input-group");
      inputs.forEach((input) => {
        input.classList.remove("focus");
        input.querySelector("input").value = "";
      });
    }, 1000);

    $.ajax({
      url: "includes/edit.php",
      type: "POST",
      data: formData,
      success: function (response) {
        var res = JSON.parse(response);
        if (res.success == true) {
          $("#displayMassage").html(
            '<span class = "successful">  Form submited successful</span>'
          );
          $("#products-table").html(res.code);
        }
      },
    });
  } else {
    const errorContainer = document.querySelector(".message-container");
    errorContainer.classList.add("message-container-active");
    errorContainer.classList.add("message-error");
    window.setTimeout(() => {
      errorContainer.classList.remove("message-container-active");
      errorContainer.classList.remove("message-error");
    }, 3000);
    $("#displayMassage").html(
      '<span class = "fill">  Please fill all fields</span>'
    );
  }
}

$(document).ready(function () {
  $("#search").keyup(function () {
    var search = $(this).val();
    $.ajax({
      url: "search.php",
      method: "post",
      data: { query: search },
      success: function (response) {
        $("#products-table").html(response);
      },
    });
  });
});
function editProduct( id_product){
  $.ajax({
    url: "includes/load.includes.php",
    method: "post",
    data: { query: id_product },
    success: function (forms) {
      var res = JSON.parse(forms);
      $("#edit_form").html(res.code);
    },
  });
}
$(document).ready(function () {
  $("#search").keyup(function () {
    var search = $(this).val();
    $.ajax({
      url: "search.php",
      method: "post",
      data: { query: search },
      success: function (response) {
        $("#products-table").html(response);
      },
    });
  });
});

// overlay.addEventListener("click", () => {
//   overlay.classList.remove("overlay-active");
//   addForm.classList.remove("product-form-active");
//   const inputs = document.querySelectorAll(".input-box");
//   inputs.forEach((input) => {
//     input.classList.remove("focus");
//   });
// });

const deleteBtns = document.querySelectorAll(".delete-btn");
const confirmForm = document.querySelector(".confirm-delete-form");
const cancelDelete = document.querySelector("#cancel-delete");
var productID;
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    productID = event.target.id;

    confirmForm.classList.add("confirm-delete-form-active");
    var deleteConfirm = confirmForm.querySelector("a");
    deleteConfirm.href = "index.php?delete=" + productID;
  });
});

cancelDelete.addEventListener("click", () => {
  // overlay.classList.remove("overlay-active");
  confirmForm.classList.remove("confirm-delete-form-active");
});

const editBtns = document.querySelectorAll(".edit-btn");
const cancelEditBtn = document.getElementById("cancel-edit")
const editForm = document.querySelector(".edit-form");
editBtns.forEach((b) => {
  b.addEventListener("click", () => {
    editForm.classList.add("edit-form-active");
    var editID;
    editID = event.target.id;
    console.log(editID)
  });
});

function cancelModal() {
  editForm.classList.remove("edit-form-active");
}


const filters = document.querySelectorAll(".filter-title");
const filterByInput = document.querySelector("#filter-by");
filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((el) => {
      el.classList.remove("active-filter");
    });

    filter.classList.add("active-filter");

    if (filter.textContent.trim() == "Name") {
      filterByInput.value = "product-name";
    } else if (filter.textContent.trim() == "Category") {
      filterByInput.value = "category";
    } else {
      filterByInput.value = "range";
    }
  });
});

const search = document.getElementById("search");
const filterContainer = document.querySelector(".filter-container");
search.addEventListener("click", () => {
  filterContainer.classList.add("filter-container-active");
});

search.addEventListener("focus", () => {
  filterContainer.classList.add("filter-container-active");
});

document.addEventListener("click", function (event) {
  if (
    event.target !== filterContainer &&
    event.target !== search &&
    !event.target.classList.contains("filter-title")
  ) {
    filterContainer.classList.remove("filter-container-active");
  }
});

filterContainer.addEventListener("click", () => {
  event.stopPropagation();
});

// ignoreEl.forEach((el) => {
//   el.addEventListener("click", function (event) {
//     event.stopPropagation();
//   });
// });

$(document).ready(function () {
  var table = $("#products-table").DataTable({
    autoWidth: false,
    searching: false,
    paging: true,
    sorting: false,
  });
});

var index = document.querySelectorAll("table .index");
var num = 1;

for (let i = 0; i < index.length; i++) {
  index[i].textContent = num;
  num = num + 1;
}
