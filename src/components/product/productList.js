import React, { Component } from "react";
import Product from "./product";
import { Products } from "../../action/actionfetch";
import { pricefilter } from "../../action/action";
import { connect } from "react-redux";
import CatList from "../categories/catlist";
import { Slider } from "material-ui-slider";
import Close from "@material-ui/icons/Close";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import classes from "./styles";
import {
  withStyles,
  Paper,
  Radio,
  Checkbox,
  Fab,
  TextField
} from "@material-ui/core";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Image,
  Card
} from "react-bootstrap";
import { storeProducts } from "../../Data/data";
import styled from "styled-components";
import img from "../fotter/fotter.png";
import { ProductConsumer } from "../../contextAPi/context";
let minRange = 0;
let maxrange = 50;
let searchMe = "";
class ProductList extends Component {
  componentDidMount() {
    this.props.Product();
  }

  handleChange = e => {
    minRange = e[0];
    maxrange = e[1];
    let newArr = [];
    this.props.Allpro.map(products => {
      if (products.price >= minRange && products.price <= maxrange) {
        newArr = [...newArr, products];
      }
    });
    this.props.pricefilter(newArr);
  };

  handleChangeinput = e => {
    console.log("yes i am called", e.target.value);
    searchMe = e.target.value;
  };
  updateWithkeyword = () => {
    console.log(searchMe, "i am keyword");
    let newArr = [];
    this.props.Allpro.map(products => {
      var n = products.name.search(searchMe);
      console.log("search", n);
      if (n != -1) {
        newArr = [...newArr, products];
      }
    });

    this.props.pricefilter(newArr);
  };
  reset = () => {
    let newArr = [];
    this.props.Allpro.map(products => {
      newArr = [...newArr, products];
    });

    this.props.pricefilter(newArr);
  };

  card2() {
    const element = (
      <Card style={{ height: "" }}>
        <Card.Body>
          <Card.Text>
            <div className={classes.root}>
              <Container>
                <div className="flex mb-4 contentHolder">
                  <div className="w-1/4 filterSection">
                    <Paper className={classes.controlContainer} elevation={1}>
                      <div className={classes.filterBodyContainer}>
                        <div className={classes.colorBlock}>
                          <div className={classes.titleContainer}>
                            <span className={classes.controlsTitle}>Color</span>
                          </div>
                          <div className={classes.colorRadiosContainer}>
                            <Radio
                              style={{ padding: 0, color: "#6eb2fb" }}
                              size="small"
                              icon={<FiberManualRecord />}
                              value="a"
                              name="radio-button-demo"
                              aria-label="A"
                            />
                            <Radio
                              style={{ padding: 0, color: "#00d3ca" }}
                              size="small"
                              icon={<FiberManualRecord />}
                              value="b"
                              name="radio-button-demo"
                              aria-label="B"
                            />
                            <Radio
                              style={{ padding: 0, color: "#f62f5e" }}
                              size="small"
                              icon={<FiberManualRecord />}
                              value="c"
                              name="radio-button-demo"
                              aria-label="C"
                            />
                            <Radio
                              style={{ padding: 0, color: "#fe5c07" }}
                              size="small"
                              icon={<FiberManualRecord />}
                              value="d"
                              name="radio-button-demo"
                              aria-label="D"
                            />
                            <Radio
                              style={{ padding: 0, color: "#f8e71c" }}
                              size="small"
                              icon={<FiberManualRecord />}
                              value="e"
                              name="radio-button-demo"
                              aria-label="E"
                            />
                            <Radio
                              style={{ padding: 0, color: "#7ed321" }}
                              size="small"
                              icon={<FiberManualRecord />}
                              value="f"
                              name="radio-button-demo"
                              aria-label="F"
                            />
                            <Radio
                              style={{ padding: 0, color: "#9013fe" }}
                              size="small"
                              icon={<FiberManualRecord />}
                              value="g"
                              name="radio-button-demo"
                              aria-label="G"
                            />
                          </div>
                        </div>
                        <div className={classes.sizesBlock}>
                          <div className={classes.titleContainer}>
                            <span className={classes.controlsTitle}>Size</span>
                          </div>
                          <div className={classes.sizeCheckboxes}>
                            <Checkbox
                              style={{ padding: 5 }}
                              checkedIcon={
                                <div className={classes.sizeCheckboxChecked}>
                                  XS
                                </div>
                              }
                              icon={
                                <div className={classes.sizeCheckboxUnchecked}>
                                  XS
                                </div>
                              }
                              value="XS"
                            />
                            <Checkbox
                              style={{ padding: 5 }}
                              checkedIcon={
                                <div className={classes.sizeCheckboxChecked}>
                                  S
                                </div>
                              }
                              icon={
                                <div className={classes.sizeCheckboxUnchecked}>
                                  S
                                </div>
                              }
                              value="checkedA"
                            />
                            <Checkbox
                              style={{ padding: 5 }}
                              checkedIcon={
                                <div className={classes.sizeCheckboxChecked}>
                                  M
                                </div>
                              }
                              icon={
                                <div className={classes.sizeCheckboxUnchecked}>
                                  M
                                </div>
                              }
                              value="M"
                            />
                            <Checkbox
                              style={{ padding: 5 }}
                              checkedIcon={
                                <div className={classes.sizeCheckboxChecked}>
                                  L
                                </div>
                              }
                              icon={
                                <div className={classes.sizeCheckboxUnchecked}>
                                  L
                                </div>
                              }
                              value="L"
                            />
                            <Checkbox
                              style={{ padding: 5 }}
                              checkedIcon={
                                <div className={classes.sizeCheckboxChecked}>
                                  XL
                                </div>
                              }
                              icon={
                                <div className={classes.sizeCheckboxUnchecked}>
                                  XL
                                </div>
                              }
                              value="XL"
                            />
                          </div>
                        </div>
                        <div className={classes.sliderBlock}>
                          <div className={classes.titleContainer}>
                            <span className={classes.controlsTitle}>
                              Price Range
                            </span>
                          </div>
                          <div className={classes.sliderContainer}>
                            <Slider
                              color="#f62f5e"
                              defaultValue={[1, 50]}
                              min={1}
                              max={50}
                              range
                              filerwithPice
                              onChange={this.handleChange}
                            />
                          </div>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "row",
                              height: "24px"
                            }}
                          >
                            <div className={classes.rangesText}>
                              {`£ ` + minRange}
                            </div>
                            <div style={{ flexGrow: 1 }} />
                            <div className={classes.rangesText}>
                              {`£ ` + maxrange}
                            </div>
                          </div>
                        </div>
                        <div className={classes.searchBlock}>
                          <div className={classes.titleContainer}>
                            <span className={classes.controlsTitle}>
                              Search keyword
                            </span>
                          </div>
                          <div className={classes.searchContainer}>
                            <TextField
                              inputProps={{
                                className: classes.filterSearchInput
                              }}
                              placeholder="Enter a keyword to search..."
                              margin="dense"
                              variant="outlined"
                              name="search"
                              onChange={this.handleChangeinput}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={classes.footerBlock}>
                        <Fab
                          color="primary"
                          size="small"
                          className={classes.coloredButton}
                          style={{ borderRadius: 24, height: 35, width: 90 }}
                        >
                          <span
                            className={classes.submitButtonText}
                            onClick={this.updateWithkeyword}
                          >
                            Apply
                          </span>
                        </Fab>

                        <Fab
                          color="primary"
                          size="small"
                          className={classes.coloredButton}
                          style={{ borderRadius: 24, height: 35, width: 90 }}
                        >
                          <span
                            className={classes.submitButtonText}
                            onClick={this.reset}
                          >
                            Reset
                          </span>
                        </Fab>
                      </div>
                    </Paper>
                  </div>
                </div>
              </Container>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
    return element;
  }
  card() {
    const element = (
      <Card style={{ height: "" }}>
        <Card.Body>
          <Card.Header
            style={{
              backgroundColor: "var(--lightBlue)",
              borderRadius: "15px  30px"
            }}
          >
            <h3> Filter Items </h3>
          </Card.Header>
          <Card.Text>
            <CatList />
          </Card.Text>
        </Card.Body>
      </Card>
    );
    return element;
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Row className="text-center">
              <Col className="my-3" xs={3} md={3}>
                {this.card()}
                {this.card2()}
              </Col>
              <Col xs={9} md={9}>
                <Row>
                  {console.log(this.props.myname)}
                  {this.props.myname.map(products => {
                    return (
                      <Product products={products} key={products.product_id} />
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <fotter className="my-3 col-xs-12">
          <img
            bodyStyle={{ overflow: "overlay" }}
            src={img}
            style={{ width: "100%", height: 250 }}
          />
        </fotter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    myname: state.productOfshop,
    Allpro: state.Allpro
  };
};
const mapDispatchToPros = dispatch => {
  return {
    Product: () => {
      dispatch(Products());
    },
    pricefilter: obj => {
      dispatch(pricefilter(obj));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToPros
)(ProductList);
const ProductWrapper = styled.section``;
