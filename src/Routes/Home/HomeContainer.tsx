import React from "react";
import HomePresenter from "./HomePresenter";
// import { loadIssue } from "../../Utils/block";
import { Loading } from "../../Components/Loading";
import { PLTags } from "../../config/_mixin";
import { Goods } from "../../shared-interfaces";

import BTS from "../../static/bts.jpg";

interface Props {}

interface State {
  tags: number[];
  searchTerm: string;
  items: Goods[];
}

export default class HomeContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tags: [],
      searchTerm: "",
      items: [
        { price: 1, name: "음성녹음", imgSrc: BTS },
        { price: 1, name: "음성녹음", imgSrc: BTS },
        { price: 1, name: "음성녹음", imgSrc: BTS }
      ]
    };
  }

  toggleTag = (idx: number) => {
    const { tags } = this.state;
    const index = tags.indexOf(idx);
    if (index !== -1) {
      tags.splice(index, 1);
      this.setState({ tags });
    } else {
      tags.push(idx);
      this.setState({ tags });
    }
  };

  handleSetTags = (item: any) => {};

  render() {
    let { items, tags } = this.state;
    if (tags.length !== 0) {
      const category: string[] = [];
      tags.forEach((tag: number) => category.push(PLTags[tag]));
      if (items) {
        items = items.filter((item: any) => category.includes(item.tags));
      }
    }
    return false ? (
      <Loading />
    ) : (
      <HomePresenter
        items={items}
        tags={this.state.tags}
        toggleTag={this.toggleTag}
      />
    );
  }
}
