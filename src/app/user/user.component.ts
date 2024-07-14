import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /**
   * 選択中User
   */
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  /**
   * get path of user image
   * signalを使う場合はcomputedと併用する
   */
  userImagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // /**
  //  * get path of user image
  //  */
  // get userImagePath(){
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  /**
   * click event for user image
   */
  onSelectUser(){
    //console.log("Clicked " + this.selectedUser.name);
    const randomIndex =  Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }

}
