import * as React from "react";
import { mount, shallow } from "enzyme";
var chai = require("chai");
var expect = chai.expect;
import { CollapsibleCard } from "../../components/collapsableCard";
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

describe('CollapsibleCard component', () => {
    const shownText = 'Shown text';
    const hiddenText = 'Hidden Text test';

    it('should render without throwing an error', function () {
      const wrap = shallow(<CollapsibleCard frontText={shownText} backText={hiddenText}/>);
      expect(wrap.find('#shownText').text()).to.equal(shownText);

      // userEvent.click(screen.getByText(shownText));
      // expect(wrap.find('#collapsibleText').text()).to.equal(hiddenText);
    });
  });