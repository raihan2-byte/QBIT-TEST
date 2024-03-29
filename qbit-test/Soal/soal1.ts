

type IFruit = {
  fruitId: number,
  fruitName: string,
  fruitType: 'IMPORT' | 'LOCAL',
  stock: number
  }

  const fruits: IFruit[] = [
  {
  fruitId: 1,
  fruitName: 'Apel',
  fruitType: 'IMPORT',
  stock: 10
  },
  {
  fruitId: 2,
  fruitName: 'Kurma',
  fruitType: 'IMPORT',
  stock: 20
  },

  { fruitId: 3,  
  fruitName: 'apel',
  fruitType: 'IMPORT',
  stock: 50
  },

  {
  fruitId: 4,
  fruitName: 'Manggis',
  fruitType: 'LOCAL',
  stock: 100
  },

  {
  fruitId: 5,
  fruitName: 'Jeruk Bali',
  fruitType: 'LOCAL',
  stock: 10
  },

  {
  fruitId: 5,
  fruitName: 'KURMA',
  fruitType: 'IMPORT',
  stock: 20
  },

  {
  fruitId: 5,
  fruitName: 'Salak',
  fruitType: 'LOCAL',
  stock: 150
  }

  ]

const andisFruits = fruits.filter(fruit => fruit.stock > 0);

const andisFruitNames = andisFruits.map(fruit => fruit.fruitName).join(', ');
console.log(`1. Buah yang dimiliki Andi: ${andisFruitNames}`);

const fruitTypes = [...new Set(andisFruits.map(fruit => fruit.fruitType))];
const separatedFruits = fruitTypes.map(type => {
  const fruitsByType = andisFruits.filter(fruit => fruit.fruitType === type);
  const fruitNames = fruitsByType.map(fruit => fruit.fruitName).join(', ');
  return `${type}: ${fruitNames}`;
});
console.log(`2. Jumlah wadah yang dibutuhkan: ${fruitTypes.length}`);
console.log(`   Buah di setiap wadah: ${separatedFruits.join('; ')}`);

const totalStockByType = fruitTypes.map(type => {
  const fruitsByType = andisFruits.filter(fruit => fruit.fruitType === type);
  const totalStock = fruitsByType.reduce((acc, curr) => acc + curr.stock, 0);
  return `${type}: ${totalStock}`;
});
console.log(`3. Total stock buah di setiap wadah: ${totalStockByType.join('; ')}`);
