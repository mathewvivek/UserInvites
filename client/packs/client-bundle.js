// import ReactOnRails from 'react-on-rails';
// ..refer - > https://github.com/shakacode/react_on_rails/issues/991
window.ReactOnRails = window.ReactOnRails || require('react-on-rails').default;

import 'jquery';
import 'jquery-ujs';

import Alerts from '../bundles/referrals/components/Alerts/Alerts';
import NavigationBar from '../bundles/referrals/components/NavigationBar/NavigationBar';
import SignInPage from '../bundles/referrals/components/SignIn/SignIn';
import SignUpPage from '../bundles/referrals/components/SignUp/SignUp';
import ListInvitations from '../bundles/referrals/components/Invitations/List';
import NewInvitation from '../bundles/referrals/components/Invitations/New';
import EditInvitation from '../bundles/referrals/components/Invitations/Edit';

ReactOnRails.register({
  NavigationBar,
  Alerts,
  SignInPage,
  SignUpPage,
  ListInvitations,
  NewInvitation,
  EditInvitation
});
