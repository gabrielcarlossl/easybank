import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import NextGenBankSection from '../components/next-gen-bank-section';


const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="easybank - Home">
          <HeaderOne />
          <NextGenBankSection/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
