/** @jsx jsx */
import { css } from "@emotion/react";

export const whySection = css`
  background-color: #f3f4f6;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 850px) and (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .whyTitleContainer {
    @media (max-width: 1400px) {
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 0;
    }
  }
  .whyTitle {
    @media (max-width: 850px) and (min-width: 500px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 0;
      align-items: center;
    }
    @media (max-width: 500px) {
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h2 {
      margin-bottom: 25px;
      color: #2d314d;
      @media (max-width: 850px) and (min-width: 500px) {
        text-align: center;
        font-size: 36px;
      }
      @media (max-width: 500px) {
        margin: 0 20px 30px 20px;
        text-align: center;
      }
    }
    p {
      margin: 0;
      padding: 0;

      color: gray;
      @media (max-width: 850px) and (min-width: 500px) {
        text-align: center;
        font-size: 22px;
      }
      @media (max-width: 500px) {
        width: 100%;
        padding: 0 20px;
        text-align: center;
      }
    }
  }
  .cards {
    display: flex;
    margin-top: 50px;
    @media (max-width: 1400px) and (min-width: 850px) {
      justify-content: center;
    }
    gap: 20px;
    @media (max-width: 850px) and (min-width: 500px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
    }
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
    }
  }
`