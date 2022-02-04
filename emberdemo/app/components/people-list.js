import Component from '@glimmer/component';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class PeopleListComponent extends Component {
  @tracked selectedLeaseLength= null;

  @action selectLeaseLength(e) {
    this.selectedLeaseLength = e;
    this.selectedLeaseLength.price = parseInt(229) + parseInt(e.price_extra);
  }
}
