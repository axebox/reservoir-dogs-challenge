import { Controller } from 'stimulus';
import axios from 'axios';

class AliasMapper extends Controller {
    static get targets() {
        return [
            'form',
            'picker',
            'alias',
            'name',
        ];
    }

    initialize() {
        this.nameTarget.addEventListener('transitionend', (e) => this.onTransitionEnd(e));
        this.aliasTarget.addEventListener('transitionend', (e) => this.onTransitionEnd(e));
        this.formTarget.addEventListener('submit', (e) => this.onSubmit(e));
    }

    onSubmit(e) {
        e.preventDefault();

        const alias = this.pickerTarget.value;
        
        axios.get('api/endpoint.php', { params: { alias } })
            .then((res) => this.updateName(res.data))
            .catch((err) => console.error(err));
        
    }

    onTransitionEnd(e) {
        // resolve fadeout
        this.nameTarget.classList.remove('is-fadeout');
        this.aliasTarget.classList.remove('is-fadeout');

        // dom write
        this.nameTarget.innerText = this.data.name;
        this.aliasTarget.innerText = this.data.alias;
    }

    updateName(res) {
        const { alias, name } = res;

        // store data
        this.data.name = name || "<unknown>";
        this.data.alias = alias || "<unknown>";

        // init fadeout
        this.nameTarget.classList.add('is-fadeout');
        this.aliasTarget.classList.add('is-fadeout');
    }
}

export default AliasMapper;
