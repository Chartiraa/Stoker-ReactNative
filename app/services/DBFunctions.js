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

export { CustomerTableFiller, CustomerAdder }