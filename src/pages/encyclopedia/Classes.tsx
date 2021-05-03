import { Link } from "react-router-dom";

export default function Classes() {
  return (
    <div>
      <h1>Classes</h1>
      <p>Character class is a crucial attribute of a character. Not only it determines which <Link to='/encyclopedia/roles'>Role</Link> it will perform in the game but also it's strength and weakness.</p>
      <p>There are four classes in the game: Mage, Priest, Rogue, Warrior. Following section categorize them by their role and list their characteristic scores. For more information about the characteristics, see the <Link to='/encyclopedia/roles'>Role</Link> section.</p>
      <h2>DPS</h2>
      <h3>Melee</h3>
      <h4>Rogue</h4>
      Masters of unfair plays and dirty tricks, Rogues excel at sustained single target damage.
      <h5>Stat priority</h5>

      <p>Agility &gt;&gt; Hit Rating (up to 9.0) &gt;&gt; Critical Rating ~ Strength &gt; Haste &gt; Resistance ~ Armor ~ Stamina</p>

      <h5>Characteristics</h5>
      <ul>
        <li>
        AOE burst -
        </li>
        <li>
        AOE damage output --
        </li>
        <li>
        Cleave damage output ++
        </li>
        <li>
        Item level scaling +
        </li>
        <li>
        Mobility +
        </li>
        <li>
        Single target burst --
        </li>
        <li>
        Single target damage output +++
        </li>
        <li>
        Survivability ++
        </li>
        <li>
        Sustained damage profile +++
        </li>
        <li>
        Threat management +
        </li>
        <li>
        Utility ---
        </li>
      </ul>
      <h3>Ranged</h3>
      <h4>Mage</h4>
      Thanks to repertoire of powerful spells mages can hold off hordes on enemies.
      <h5>Stat priority</h5>

      <p>Intellect &gt;&gt; Hit Rating (up to 16.0) &gt;&gt; Spirit ~ Critical Rating &gt; Haste &gt; &gt; Resistance ~ Armor ~ Stamina</p>

      <h5>Characteristics</h5>
      <ul>
        <li>
        AOE burst ++
        </li>
        <li>
        AOE damage output +++
        </li>
        <li>
        Cleave damage output -
        </li>
        <li>
        Item level scaling -
        </li>
        <li>
        Mobility ++
        </li>
        <li>
        Single target burst +
        </li>
        <li>
        Single target damage output +
        </li>
        <li>
        Survivability +++
        </li>
        <li>
        Sustained damage profile ---
        </li>
        <li>
        Threat management +
        </li>
        <li>
        Utility +
        </li>
      </ul>
    </div>
  )
}