let myMap = new(Map);
myMap.set('key1','value 1');
myMap.set('key2','value 2');
myMap.set('key3','value 3');

for (let key of myMap.keys())
{
  console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);
}