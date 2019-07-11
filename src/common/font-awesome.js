import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleLeft, faPlus, faSearch, faCamera, faEllipsisH, faTimes, faComment,
  faUserPlus, faQrcode, faHandHoldingUsd, faEnvelope, faBookOpen, faBookReader, faCubes, faAward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faAngleLeft, faPlus, faSearch, faCamera, faEllipsisH, faTimes, faComment,
  faUserPlus, faQrcode, faHandHoldingUsd, faEnvelope, faBookOpen, faBookReader, faCubes, faAward,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
