# ChoreNow

## File structure:
### App
Navigation logic
### Pages

### Features
### Components
### Assets
### Services
### Utils

## Database set-up
### Rooms
### Chores
### Settings

## Known bugs
- Add chore form: Freq input validation not implemented, so algorithm will break if user enters 3 freqs out of order
- Edit chore form: Edit time does not let you type in input
- ChoreNow view: time input does not persist if navigate away
- Room view: Android does not render border radius properly
- Schedule view: does not schedule a task multiple times in a week if minFreq < 7 days
- Delete rooms: chores under room do not delete if room deleted