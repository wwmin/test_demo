//生成随机数组
function generateArray(length) {
    let arr = Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = Math.random();
    }
    return arr;
}
//排序算法 javascript 从小到达
/**
 * 冒泡排序(沉掉排序 sinking sort)
 */
function bubbleSort(arr) {
    console.time('bubbleSort');
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    console.timeEnd('bubbleSort');
    return arr;
}
// bubbleSort(generateArray(10000));

/**
 * 选择排序
 */
function selectionSort(arr) {
    console.time('selectionSort');
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[i]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    console.timeEnd('selectionSort');
    return arr;
}
// selectionSort(generateArray(10000));

/**
 * 插入排序
 */
function insertionSort(arr) {
    console.time('insertonSort');
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i;
        let tmp = arr[i];
        while (j > 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = tmp;
    }
    console.timeEnd('insertonSort');
    return arr;
}

// insertionSort(generateArray(10000));
/**
 * 归并排序
 */
function mergeSort(arr) {
    return main(arr);

    function main(arr) {
        if (arr.length === 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);

        return mergeSort(arguments.callee(left), arguments.callee(right));
    }

    function merge(left, right) {
        let il = 0,
            rl = 0,
            result = [];
        while (il < left.length && rl < right.length) {
            if (left[il] < right[rl]) {
                result.push(left[il++]);
            } else {
                result.push(right[rl++]);
            }
        }
        return result.concat(left.slice(il)).concat(right.slice(rl));
    }
}

// mergeSort(generateArray(10000));

/**
 * 快速排序
 */
function quickSort(arr) {
    console.time("quickSort");
    let left = 0,
        right = arr.length - 1;
    main(arr, left, right);
    console.timeEnd("quickSort");
    return arr;

    function main(arr, left, right) {

        if (arr.length === 1) {
            return;
        }
        let index = partition(arr, left, right);
        if (left < index - 1) {
            main(arr, left, index - 1);
        }
        if (index < right) {
            main(arr, index, right);
        }
    }

    function partition(arr, left, right) {
        let pivot = arr[Math.floor((left + right) / 2)];
        while (left <= right) {
            while (arr[left] < pivot) {
                left++;
            }
            while (arr[right] > pivot) {
                right--;
            }
            if (left <= right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            }
        }
        return left;
    }
}

// quickSort(generateArray(10000));

/**
 * 堆排序
 */
function heapSort(arr) {
    //console.time('HeapSort');
    buildHeap(arr);
    for(let i=arr.length-1; i>0; i--) {
        // 从最右侧的叶子节点开始，依次与根节点的值交换。
        [arr[i], arr[0]] = [arr[0], arr[i]];
        // 每次交换之后都要重新构建堆结构，记得传入i限制范围，防止已经交换的值仍然被重新构建。
        heapify(arr, i, 0);
    }
    //console.timeEnd('HeapSort');
    return arr;
    function buildHeap(arr) {
        // 可以观察到中间下标对应最右边叶子节点的父节点。
        let mid = Math.floor(arr.length / 2);
        for(let i=mid; i>=0; i--) {
            // 将整个数组构建成堆结构以便初始化。
            heapify(arr, arr.length, i);
        }
        return arr;
    }
    // 从i节点开始下标在heapSize内进行堆结构构建的函数。
    function heapify(arr, heapSize, i) {
        // 左子节点下标。
        let left = 2 * i + 1,
            // 右子节点下标。
            right = 2 * i + 2,
            // 假设当前父节点满足要求（比子节点都大）。
            largest = i;
        // 如果左子节点在heapSize内，并且值大于其父节点，那么left赋给largest。
        if(left < heapSize && arr[left] > arr[largest]) {
            largest = left;
        }
        // 如果右子节点在heapSize内，并且值大于其父节点，那么right赋给largest。
        if(right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }
        if(largest !== i) {
            // 如果largest被修改了，那么交换两者的值使得构造成一个合格的堆结构。
            [arr[largest], arr[i]] = [arr[i], arr[largest]];
            // 递归调用自身，将节点i所有的子节点都构建成堆结构。
            arguments.callee(arr, heapSize, largest);
        }
        return arr;
    }
}
