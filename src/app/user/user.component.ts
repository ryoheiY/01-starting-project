import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  // @Input({required: true}) avatar! : string;
  // @Input({required: true}) name! : string;
  // @Input({required: true}) id! : string;
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();

  /**
   * get user image path
   */
  imagePath = computed(() => "assets/users/" + this.avatar());

  /**
   * click event for user image
   */
  onSelectUser() {}
}
