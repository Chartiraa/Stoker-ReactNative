import { getDatabase, ref, get, set, child } from "firebase/database";
import "../../firebaseConfig"

const db = getDatabase();
const dbRef = ref(db);

async function CustomerTableFiller() {

  var items = [];

  await get(child(dbRef, `Stoker/Customers/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        items = snapshot.val();

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    })

  return items
}

async function CustomerAdder(name, surname, tel, tc, customerType) {

  var returnValue = false

  await set(ref(db, 'Stoker/Customers/' + tc + "/"), {
    name: name,
    surname: surname,
    tel: tel,
    tc: tc,
    customerType: customerType
  })
    .then(() => {
      returnValue = true
    })
    .catch((error) => {
      console.error(error);
      returnValue = false
    })

  return returnValue
}

async function ProductTableFiller() {

  var items = [];

  await get(child(dbRef, `Stoker/Products/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        items = snapshot.val();

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    })

  return items
}

async function ProductAdder(barcode, productName, productGroup, productIngredient, productPackage, productAmount, productUnit, productPrice) {

  var returnValue = false

  await set(ref(db, 'Stoker/Products/' + barcode + "/"), {
    barcode: barcode,
    productName: productName,
    productGroup: productGroup,
    productIngredient: productIngredient,
    productPackage: productPackage,
    productMass: productAmount + ' ' + productUnit,
    productPrice: productPrice
  })
    .then(() => {
      returnValue = true
    })
    .catch((error) => {
      console.error(error);
      returnValue = false
    })

  return returnValue
}

async function WarehouseTableFiller() {

  var items = [];

  await get(child(dbRef, `Stoker/Warehouses/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        items = snapshot.val();

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    })

  return items
}

async function WarehouseAdder(warehouseName) {

  var returnValue = false

  await set(ref(db, 'Stoker/Warehouses/' + warehouseName + "/"), {
    warehouseName: warehouseName
  })
    .then(() => {
      returnValue = true
    })
    .catch((error) => {
      console.error(error);
      returnValue = false
    })

  return returnValue
}

export { CustomerTableFiller, CustomerAdder, ProductTableFiller, ProductAdder, WarehouseTableFiller, WarehouseAdder }