import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DataService from '../../services/dataService';
import BasicInformation from './BasicInformation';
import AnotherInformation from './AnotherInformation';
import LoaderModal from '../LoaderModal';
import ErrorMessage from '../ErrorMessage';

class SingleReport extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: null, error: false };
  }

  componentDidMount() {
    if (this.props.isNew) {
      DataService.getReportFromApi(this.props.match.params.email)
        .then((response) => {
          console.log(response);
          this.setState({
            data:  response.data
          });     
        })
        .catch((error) => {
          this.setState( { error: true });
        });
    } else {
      DataService.getReportFromStorage(this.props.username, this.props.match.params.id)
        .then((response) => {
        this.setState({
          data:  response
        });     
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.data ? (
          <div>
            <Col md={3}>
              <BasicInformation data={this.state.data} isNew={this.props.isNew}/>
            </Col>
            <Col md={9}>
              <AnotherInformation data={this.state.data} />
            </Col>
          </div>
          ) : this.state.error ? (
            <ErrorMessage />
          ): (
            <LoaderModal show={true} />
          ) }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.user.email
});

export default connect(mapStateToProps)(withRouter(SingleReport));