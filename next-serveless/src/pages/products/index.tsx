import type {GetStaticProps, NextPage} from 'next'
import styles from '../../styles/Home.module.css'
import {useEffect, useState} from "react";
import Link from "next/link";

const Products: NextPage = ({products}:any) => {

  return (
    <div>
        {products}
        {JSON.stringify(products)}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async(context) =>{
  //const resp = await fetch(`https://dev-api.datumtrack.com/url-builder/v1/url?accountId=20000000100223250000`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const {results} = await res.json();
  const data = JSON.stringify(results)

  return{
    props: {
      //products: JSON.parse(JSON.stringify(results)),
      products: data,
    },
  };
}


export default Products;