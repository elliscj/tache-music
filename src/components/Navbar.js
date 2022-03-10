import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="bio"
            active={activeItem === "bio"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="music"
            active={activeItem === "music"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}
