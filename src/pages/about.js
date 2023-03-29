import React from 'react'
import data from './Data.json'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import Pagination from 'react-bootstrap/Pagination';
// import BootstrapTable from 'react-bootstrap-table-next';
import '../App.css'


const About = () => {

  const columns = [
    {
      dataField: 'id',
      text: 'Id',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'title',
      text: 'Name',
      filter: textFilter()

    },
    {
      dataField: 'de',
      text: 'Name',
      filter: textFilter()

    }

  ]


  const options = {
    onSizePerPageChange: (sizePerPage, page) => {
      console.log('Size per page change!!!');
      console.log('Newest size per page:' + sizePerPage);
      console.log('Newest page:' + page);
    },
    onPageChange: (page, sizePerPage) => {
      console.log('Page change!!!');
      console.log('Newest size per page:' + sizePerPage);
      console.log('Newest page:' + page);
    }
  };
  


  return (
    <div>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center px-lg-5 abouttop">
              <h3>Table</h3>
              <BootstrapTable keyField='id' data={data} columns={columns} filter={filterFactory()}  pagination={ paginationFactory()} /> 
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

