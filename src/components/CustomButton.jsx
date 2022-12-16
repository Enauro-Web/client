import React from 'react'

const CustomButton = ({btnType, title, handleClick, styles}) => {
  return (
    <button type={btnType}
     className={`${styles} font-epilogue font-semibold text-[16px] text-white leading-[26px] min-h-[52px] px-4 rounded-[10px]`}
      onClick={handleClick}>
      {title}
    </button>
  )
}

export default CustomButton