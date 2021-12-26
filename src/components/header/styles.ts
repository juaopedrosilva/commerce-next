import styled from "styled-components";

export const Wrapper = styled.header`
  background: #FFF;
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  user-select: none;
  width: 100%; 

  @media (max-width: 25rem) {
    flex-direction: column; 
    justify-content: space-around;
    padding: 1rem 0.5rem;

    > span > span >  img {
      margin-bottom: 10px;
    }
  }

  .right-collunm {
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: relative;

    > .search-container {
      align-items: center;
      background-color: #F4F4F4;
      border-radius: 8px;
      display: flex;
      margin-right: 1.5rem;
      padding: .5rem 1.25rem;
      width: 350px; 

      @media (max-width: 25rem) {
        margin-right: 0;
        width: 300px; 
      }

      > input {
        background-color: transparent;
        border: 0;
        flex: 1;
        font-family: 'Saira', sans-serif;
        font-size: 12px;
        margin-right:  1;
        outline: none;
      }
    }

    > .cart {
      display: flex;
      position: relative;

      > span.quantity {
        align-items: center;
        background-color: #DE3838;
        border-radius: 20px;
        bottom: -2px;
        color: #FFFFFF;
        display: flex;
        font-size: 10px;
        font-weight: 500;
        height: 20px;
        justify-content: center;
        padding: 5px;
        position: absolute;
        right: -9px;
        width: 20px;

        @media (max-width: 25rem) {
          font-size: 8px;
          height: 15px;
          width: 15px;
        }
      }
    }
  }
` 