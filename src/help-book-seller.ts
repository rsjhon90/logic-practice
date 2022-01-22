export class G964 {

  public static stockList = 
    (listOfArt: string[], listOfCat: string[]): string => {

      if (!listOfArt || 
          !listOfCat ||
          listOfArt.length === 0 ||
          listOfCat.length === 0
        ) {
        return '';
      };

      const totalByCategory: string[] = [];
      let emptyStockCheck: number = 0;

      listOfCat.forEach(category => {
        const totalStock = listOfArt.reduce((acc, current) => {
          if (category === current[0]) {
            const bookUnits = current.match(/\d/gi).join('');

            return Number(bookUnits) + acc;
          } 

          return acc;
        }, 0)

        emptyStockCheck += totalStock;

        totalByCategory.push(`(${category} : ${totalStock})`);
      });

      if (emptyStockCheck === 0) {
        return '';
      }

      return totalByCategory.join(' - ');
    }
}

// console.log(G964
//   .stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
//   ["A", "B"]));
// console.log(G964
//   .stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
//   ["B", "R", "D", "X"]));
// console.log(G964
//   .stockList(["BBAR 0", "CDXE 0", "BKWR 0", "BTSQ 0", "DRTY 0"],
//   ["A", "B", "C", "D"]));
// console.log(G964
//   .stockList([],
//   ["A", "B", "C", "D"]));

// G964
//   .stockList(
//   [
//     "BBAR 150", 
//     "CDXE 515", 
//     "BKWR 250", 
//     "BTSQ 890", 
//     "DRTY 600",
//   ],
//   ["A", "B", "C", "D"]);