import React, { Component } from "react";
import { Formik } from 'formik';
import { Forma, Input, SearchButton, Label } from './SearchForm.styled';

export class SearchForm extends Component {

handleSubmit = (values, actions) => {
    
    this.props.handlSearcPphoto(values)
        actions.resetForm();
    };

  render() {
    return(
      <>    
<Formik
initialValues={{ search: '' }}
onSubmit={this.handleSubmit}
  >
    <Forma >
    <SearchButton type="submit" >
      <Label>S</Label>
    </SearchButton>

    <Input
      type="text"
      name="search"
      placeholder="Search images and photos"
    />
  </Forma>
</Formik>   
      </>    
    );
      
  }
}