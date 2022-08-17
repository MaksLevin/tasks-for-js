/* Task 2 */
function Collection(constructor) {
  let arrCollection = [];

  this.readAll = () => {
    return arrCollection;
  };

  this.add = (id, name) => {
    arrCollection.push({ id: id, name: name });
  };

  this.get = (rule) => {
    const getItem = arrCollection.find(rule);

    Object.seal(getItem);

    return {
      update(setName) {
        setName(getItem);
        return this;
      },
      read() {
        return getItem;
      },
      remove() {
        arrCollection = arrCollection.filter((dog) => dog.id !== getItem.id);
        return getItem;
      },
    };
  };

  this.getBy = (rule) => {
    const getItems = arrCollection.filter(rule);

    Object.seal(getItems);

    return {
      update(setName) {
        getItems.map(setName);
      },
      read() {
        return getItems;
      },
    };
  };
}

function Dog(id, name) {
  this.id = id;
  this.name = name;
}

const dogsCollection = new Collection(Dog);

dogsCollection.readAll();

dogsCollection.add(1, "Test name1");
dogsCollection.add(2, "Test name2");
dogsCollection.add(3, "Test name3");

dogsCollection.readAll();

const dogsCollectionItem = dogsCollection.get((dog) => dog.id === 1);

dogsCollectionItem.update((dog) => { dog.name = 'Updated test name 1'; });
dogsCollectionItem.update((dog) => {dog.someNewField = 'Some new field'; });

const dog1 = dogsCollectionItem.read();

const dogsCollectionItems = dogsCollection.getBy((dog) => dog.id < 3);

dogsCollectionItems.update((dog, index) => {
	dog.name = `Updated test name ${index}`;
})

const dogs = dogsCollectionItems.read();

dogsCollectionItem.remove();
