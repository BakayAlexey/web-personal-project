import React, { Component } from 'react';
import styled from 'styled-components';
import { RouteChildrenProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { RootStore } from '../../stores';

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

interface PhotoProps extends RouteChildrenProps {
  stores?: RootStore,
}

@inject('stores')
@observer
export class Photo extends Component<PhotoProps> {
  componentDidMount() {
    // @ts-ignore
    const { id } = this.props.match?.params;
    if (!this.props.stores!.gallery._entities[id]) {
      this.props.stores!.gallery.getEntityById(id);
    }
  }

  render() {
    // @ts-ignore
    const { id } = this.props.match?.params;

    // @ts-ignore
    if (!this.props.stores!.gallery._entities[id]) {
      return (<div>No data!</div>)
    }

    // @ts-ignore
    const src = this.props.stores!.gallery._entities[id].urls.regular;

    return (
      <div>
        <Img src={src} />
      </div>
      );
  }
}
