/**
       * Definition for a binary tree node.
       * function TreeNode(val) {
       *     this.val = val;
       *     this.left = this.right = null;
       * }
       */
      /**
       * @param {TreeNode} root1
       * @param {TreeNode} root2
       * @return {boolean}
       */
      var leafSimilar = function (root1, root2) {
        if (root1 == root2) return true;
      };
      let root1 = [];
      let root2 = [];
      // console.log(leafSimilar(root1, root2));


      /**
       * @param {number[]} piles
       * @param {number} H
       * @return {number}
       */
      var minEatingSpeed = function (piles, H) {
        piles = piles.sort((a, b) => a - b < 0);
        var c = piles.length - H;
        if (c === 0) return Math.max(...piles);
        if (c > 0) {
          return -1;
        }
        if (c < 0) {
          debugger;
          var s = Math.abs(c);
          var minArr = piles.slice(0, s);
          var maxs = Math.max(...piles.slice(s));
          var mins = Math.ceil(minEatingSpeed(minArr, s) / 2);
          return mins > maxs ? mins : maxs;
        }
      };
      var piles = [30, 11, 23, 4, 20]; //[3,6,7,11],8=>5  //[30,11,23,4,20],5=>30 //[30,11,23,4,20],6=>23
      var H = 6;
  
      console.log(minEatingSpeed(piles, H));