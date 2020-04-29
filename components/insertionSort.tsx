import { range, shuffle } from 'lodash'
import { useState } from 'react'

const getArr = () => shuffle(range(1,11))
const swap = (arr, a, b) => {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}
const sort = (arr: number[]) => {
  let i = 1;
  while (i < arr.length) {
    let j = i;
    while(j > 0 && arr[j-1] > arr[j]) {
      swap(arr, j, j -1)
      j = j - 1
    }
    i = i + 1
  }
}

export default () => {
  const [arr, setArr] = useState(getArr())

  const handleShuffled = () => {
    setArr(getArr())
  }
  
  const handleSort = () => {
    const sortedArr = [...arr];
    sort(sortedArr)
    setArr(sortedArr)
  }

	return (
		<div>
			<h2 className="title">BOARD</h2>
			<div className="board">
				{arr.join(',')}
			</div>
			<div className="wrap_btn">
				<button type='button' className="btn" onClick={handleShuffled}>shuffle</button>
				<button type='button' className="btn" onClick={handleSort}>sort</button>
			</div>
			<style jsx>{`
				.title	{
					font-size:30px;
				}
				.board {
					background:blue;
					width:100%;
					height:500px;
				}
				.wrap_btn {
					text-align:right;
				}
				.btn {
					width:100px;
					height:50px;
				}
			`}</style>
		</div>
	)
}
