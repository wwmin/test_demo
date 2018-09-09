      /**
       * @param {string[]} D
       * @param {number} N
       * @return {number}
       */
      var atMostNGivenDigitSet = function (D, N) {
        let Num = 0;
        D = D.map(p => parseInt(p));
        D;
        let n = (N + "").length;
        if (n === 1) {
          return D.filter(p => p <= N).length;
        }
        // 计算子位数
        let ns = n - 1;
        Num = Array(ns).fill(1).map((p, i) => p + i).reduce((p, c) => p + D.length ** c, 0);
        Num;
        // 计算高位数
        let NArray = N.toString().split('').map(p => parseInt(p));
        NArray;

        Num += NArray.map((p, i) => sumLeft(Num, NArray.splice(i), D)).reduce((p, c) => p + c, 0);
        return Num;

        function sumLeft(sum, arr, dArray) {
          debugger;
          let a = arr[0];
          let n = dArray.find(p => p === a);
          if (n !== undefined) {
            let b = a - 1;
            // sum += sum * dArray.filter(p => p > b).length;
            sum += sumLeft(sum, arr.splice(1), dArray);
          } else {
            sum += sum * dArray.filter(p => p >= a).length;
          }

          sum;
          return sum;
        }
      };
      let D = ["3", "4", "5", "6"];
      let N = 64;
      console.log(atMostNGivenDigitSet(D, N));