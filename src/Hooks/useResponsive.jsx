import React from 'react'

export default function useResponsive() {
    function res(desktop,laptop,mobile){
      return (`min-[1440px]:${desktop} md:${laptop} ${mobile}`)
    }
  return [res]
}
