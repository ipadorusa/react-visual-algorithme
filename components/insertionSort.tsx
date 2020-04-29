import { range, shuffle } from 'lodash'
import { useState } from 'react'

const getArr = () => shuffle(range(1,11))
export default () => {
  const [arr, setArr] = useState(getArr())

  const handleShuffled = () => {
    setArr(getArr())
  }
	return (
		<div>
			<h2 className="title">BOARD</h2>
			<div className="board">
				{arr.join(',')}
			</div>
			<div className="wrap_btn">
				<button type='button' className="btn" onClick={handleShuffled}>shuffle</button>
				<button type='button' className="btn" onClick={handleShuffled}>sort</button>
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
