<div class="namepicker">
  <div class="container">

    <div data-controller="AliasMapper">
      <form action="api/endpoint.php" data-target="AliasMapper.form">
        <div class="select is-large">
          <select name="picker" id="alias" data-target="AliasMapper.picker" required>
            <option value="">Pick a name here</option>
            <option value="Mr. White">Mr. White</option>
            <option value="Mr. Orange">Mr. Orange</option>
            <option value="Mr. Blonde">Mr. Blonde</option>
            <option value="Mr. Pink">Mr. Pink</option>
            <option value="Mr. Blue">Mr. Blue</option>
            <option value="Mr. Brown">Mr. Brown</option>
            <option value="Mr. Purple">Mr. Purple</option>
          </select>
        </div>
        <input class="button is-large" type="submit" value="/ Submit" />
      </form>

      <!-- Display Alias mapping result -->
      <div class="output">
        <h3 class="label">Output:</h3>
        Alias <span class="namepicker--name" data-target="AliasMapper.alias">x</span>
        maps to <span class="namepicker--color" data-target="AliasMapper.name">y</span>.
      </div>

  </div>
</div>
