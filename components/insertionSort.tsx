import { range, shuffle } from 'lodash'
import { useState, SetStateAction } from 'react'

const SIZE = 10;
const HSIZE = 500;
const getArr = () => shuffle(range(1,50))
const swap = (arr: number[], a: number, b: number) => {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}
const delaySetArr = (arr: number[], setArr: (value: SetStateAction<number[]>) => void) => {
  return new Promise((resolve) => {
    setArr([...arr])
    setTimeout(resolve, 10);
  })
}
const sort = async (arr: number[], setArr: (value: SetStateAction<number[]>) => void) => {
  let i = 1;
  while (i < arr.length) {
    let j = i;
    while(j > 0 && arr[j-1] > arr[j]) {
      swap(arr, j, j -1)
      await delaySetArr(arr, setArr)
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
    sort(sortedArr, setArr)
    setArr(sortedArr)
  }
  
  interface IPropsBar {
    value: number
    idx: number
  }
  const Bar: React.FC<IPropsBar> = (props) => {
    const { value, idx } = props
    const style = { height: value * 10, transform: `translateX(${idx*11}px)`}
    return (
      <div>
    <div className='bar' style={style} />
    <style jsx>{`
        .bar {
          position: absolute;
          bottom:0;
          width:10px;
          background-color:black;
        }
			`}</style>
      </div>
    )
  }

	return (
		<div>
			<h2 className="title">BOARD</h2>
			<div className="board">
        {arr.map((value, i) => <Bar key={i} value={value} idx={i} />)}
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
          position:relative;
				}
				.wrap_btn {
					text-align:right;
				}
				.btn {
					width:100px;
					height:50px;
        }
        .bar {
          position: absolute;
          bottom:0;
          width:10px;
          background-color:black;
        }
			`}</style>
		</div>
	)
}
