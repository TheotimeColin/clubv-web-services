# Front-end environment
## Sélecteurs CSS
### BEM

```css
.Block_element--modifier {}
```
Exemples :
```css
.Input {}
```
```css
.Input_label--no-border {}
```
Voir http://workshops.dev.wandi.io/presentations/2018221-wandi-front-end/#/2

### Classes réservées au javascript
Pour sélectionner des éléments pour utiliser dans un script JS, utiliser une classe de type :
```html
class="js-element-name"
```
**/!\ Ne jamais mettre de style sur ces classes**

- [ ] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request

Voir http://workshops.dev.wandi.io/presentations/2018221-wandi-front-end/#/5/3

## Committing
```js
type(scope): comment
```
### Types :
  * feat (feature)
  * fix (bug fix)
  * docs (documentation)
  * style (formatting, missing semi colons...)
  * refactor (refactoring)
  * chore (maintaining)

### Scope : 
  Scope could be anything specifying place of the commit change.
  For example : routing, Button, Header, HomeController...
  
### Subject : 
  * Use imperative, present tense : “change” not “changed” nor “changes”
  * Don't capitalize first letter
  * No dot (.) at the end
  
### Exemples :
```js
feat(Button) add style on hover
```
```js
fix(routing) change Home route typo
```