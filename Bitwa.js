//kod dla zmainy motywu(kolory zmieniam w css)
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');

//przycisk dla zmiany motywu
  if (page.classList.contains('dark-theme')) {
    themeButton.textContent = "☾";
  } else {
    themeButton.textContent = "🌣";
  }
};

 //zmiana języków
		
		document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    const contentDiv = document.getElementById('content');

    languageSelect.addEventListener('change', function() {
        const selectedValue = languageSelect.value;
        if (selectedValue === 'EU') {
            contentDiv.innerHTML = `<h1 class="name"> Battle of Vienna - Jan III Sobiecki</h1>

    <a id="wstep"></a>
    <h2 class="nag"> Entry</h2>
  <div class="wstep">
        <div class="tek">On September 12, 1683, one of the most important battles in European history took place in Vienna, the capital of Austria. This battle was the culmination of the conflict between Christianity and Islam and a symbol of courage and determination to defend the European continent against the expansion of the Ottoman Empire. The main figures of this event were John III Sobieski, Grand Crown Hetman of the Republic of Poland, Emperor Leopold I Habsburg, and Grand Vizier Kara Mustafa of the Ottoman Empire. The Battle of Vienna is one of the most important episodes in the history of Poland and Europe because it contributed to saving Vienna and stopping the progress of the Turkish invasion of Western Europe. The historical context of the time was dominated by conflicts between Christians and Muslims, as well as the expansion of the Turkish Ottoman Empire into Europe. In the face of the threat to Vienna, John III Sobieski, together with his allies, decided to organize the relief of Vienna, which resulted in a decisive battle. It is worth exploring the details of this epic confrontation, its course and significance for the future fate of Europe and the history of Poland.</div>
		<div class="b1"><img class="zdj" src="Bitwa1.jpg" alt="Bitwa pod Wiedniem (fragment), XIX-wieczna kopia obrazu Marcina Altomontego; Muzeum Pałacu Króla Jana III w Wilanowie, fot. B. Seredyńska">
    <p class="tek2">&nbsp;&nbsp;&nbsp;&nbsp;Battle of Vienna (fragment), 19th-century copy of a painting<br> by Marcin Altomonte; Museum of King Jan III's Palace<br> in Wilanów, photo by B. Seredyńska</p></div></div>
    
    <a id="przygotowanie"></a><h2 class="nag"> Preparations for battle </h2> <div class="pdb">
        <div class="b2">
    <img src="Bitwa2.jpg" alt="Jan III Sobiecki" style="border-radius: 10px;" >
    <img src="Bitwa3.jpg" alt="Jan III Sobiecki" style="border-radius: 10px;">
</div>
        <div class="tek">Preparations for the Battle of Vienna in 1683 were extremely complicated and involved many sides combining their forces to repel the Turkish invasion of Central Europe. Here is a description of the preparations for this historic battle:
		<br><br> 1. Turkish threat:<ul>
		<li>The Ottoman Empire, under Grand Vizier Kara Mustafa, planned to capture Vienna as a key starting point for further expansion into Europe.</li>
		<li> The Ottomans had already surrounded Vienna since July 1683, destroying the city and gradually tightening the siege ring around it.</li>
		</ul>   2. Allies:<ul>
		<li>Jan III Sobieski, Grand Hetman of the Crown of the Republic of Poland, led the alliance against the Turkish invasion. He cooperated closely with Emperor Leopold I Habsburg, who commanded the defense of Vienna.</li>
		<li>This alliance was crucial because it united the forces of Poland, Austria and other European countries in defense of their common interest. </li>
		</ul>3. Mobilization of troops: <ul> 
		<li>Jan III Sobieski gathered significant military forces to support Vienna. His most important forces were the famous Polish hussars, known for their extraordinary courage and fighting skills.</li>
		<li>Coalition troops, consisting of Polish, Austrian and German soldiers and troops of the Duke of Lorraine, concentrated in the vicinity of Vienna.</li>
		</ul>4.Logistics and supply:<ul> 
		<li>It is worth noting that logistic organization was a key element of preparations for the battle. The supply of food, ammunition and other supplies was crucial to sustain Vienna's defenders and support the relief.</li>
		</ul>
		<br>Preparations for the Battle of Vienna required many efforts, cooperation of various countries and organizations, and skillful leadership. These efforts led to a decisive battle that turned the tide of the conflict and prevented further expansion of the Ottoman Empire in Europe.</div>
    </div>

    <a id="przebieg"></a><h2 class="nag"> The course of the battle </h2>
    <div class="wstep">
        <div class="tek">The Battle of Vienna in 1683 is a key event in European history, in which the troops under the command of Jan III Sobieski won a victory over the Turkish army that besieged Vienna. This battle took place in the context of the threat of a Turkish invasion of Central Europe.
The siege of Vienna by the Turkish army led by Grand Vizier Kara Mustafa had been ongoing since July 1683, and the situation was becoming increasingly critical for the defenders. Jan III Sobieski, in alliance with Emperor Leopold I Habsburg, decided to relieve Vienna.
On September 12, 1683, Polish hussars, led by Jan III Sobieski, carried out a heroic attack on Turkish positions. The key moment was when the hussars crossed the enemy lines, which caused disorganization and panic among the Turkish troops.
The battle ended with the victory of the coalition troops, which saved Vienna from being captured by the Turks. This event was of great importance because it stopped Turkish expansion westward, weakened the Ottoman Empire as an expansive power in Europe, and made John III Sobieski a national hero. The Battle of Vienna was a turning point in European history and influenced the further course of events in the region.</div>
        <div class="b4"><img class="zdj" src="Bitwa4.jpg" alt="Jan III Sobiecki"></div>
    </div>
    <a id="skutki"></a><h2 class="nag"> The effects of the battle </h2>
    <p class="tek">The Battle of Vienna in 1683 had far-reaching consequences for both Europe and the Ottoman Empire. Here is a description of the main consequences of this historic battle:

        <br>1.Saving Vienna:<br>
        
        The most obvious result of the Battle of Vienna was the saving of the city itself. The battle stopped the Turkish invasion and saved the capital of Austria from being captured by the Ottoman Empire. Thanks to this, Vienna remained an important cultural and political center of Central Europe.
        <br> 2. Stopping Turkish expansion:<br>
        
       The Battle of Vienna halted the progress of Turkish expansion westward. The Ottoman Empire was losing importance as an expansive force in Europe, which had an impact on the future borders and fate of European countries.
        <br> 3. Boosting the morale of Europeans:<br>
        
       The victory at Vienna inspired other European countries to resist against the Ottomans. This battle raised morale and confidence in the ability to defend against the Turkish invasion.
        <br> 4.Strengthening Poland's position:<br>
        
       The victory of John III Sobieski in the Battle of Vienna made Poland an important player on the European political scene. The Polish king became a national hero and gained prestige among European rulers.
        <br> 5. The Fall of Kara Mustafa:<br>
        
      The defeat at Vienna also had consequences in the Ottoman Empire. Kara Mustafa, the Grand Vizier who led the Turkish invasion, was executed by Sultan Mehmed IV as punishment for the failure.
        <br> 6. Further conflicts:<br>
        
       Although the Battle of Vienna was an important event, it did not completely end the conflict between Christians and Muslims. The following years brought further clashes and wars between them, but this battle was a turning point in this long-standing rivalry.
        <br> The Battle of Vienna had long-lasting effects that shaped the history of Europe and the Middle East. Saving Vienna and stopping Turkish expansion had not only military-strategic significance, but also cultural and political significance, which influenced the course of history in later centuries.</p>
       `;
        } else if (selectedValue === 'DE') {
           contentDiv.innerHTML = `<h1 class="name"> Schlacht um Wien - Jan III Sobiecki</h1>

           <a id="wstep"></a>
           <h2 class="nag">Eintrag</h2>
         <div class="wstep">
               <div class="tek">Am 12. September 1683 fand in Wien, der Hauptstadt Österreichs, eine der bedeutendsten Schlachten der europäischen Geschichte statt. Diese Schlacht war der Höhepunkt des Konflikts zwischen Christentum und Islam und ein Symbol für Mut und Entschlossenheit, den europäischen Kontinent gegen die Expansion des Osmanischen Reiches zu verteidigen. Die Hauptfiguren dieser Veranstaltung waren Johannes III. Sobieski, Großhetman der Republik Polen, Kaiser Leopold I. von Habsburg und Großwesir Kara Mustafa vom Osmanischen Reich. Die Schlacht um Wien ist eine der wichtigsten Episoden in der Geschichte Polens und Europas, da sie dazu beitrug, Wien zu retten und den Fortschritt der türkischen Invasion in Westeuropa zu stoppen. Der historische Kontext der Zeit war geprägt von Konflikten zwischen Christen und Muslimen sowie der Expansion des türkischen Osmanischen Reiches nach Europa. Angesichts der Bedrohung Wiens beschloss Johann III. Sobieski zusammen mit seinen Verbündeten, die Entlastung Wiens zu organisieren, was zu einer entscheidenden Schlacht führte. Es lohnt sich, die Einzelheiten dieser epischen Konfrontation, ihren Verlauf und ihre Bedeutung für das zukünftige Schicksal Europas und die Geschichte Polens zu untersuchen.</div>
           <div class="b1"><img class="zdj" src="Bitwa1.jpg" alt="Bitwa pod Wiedniem (fragment), XIX-wieczna kopia obrazu Marcina Altomontego; Muzeum Pałacu Króla Jana III w Wilanowie, fot. B. Seredyńska">
           <p class="tek2">&nbsp;&nbsp;&nbsp;&nbsp;Schlacht um Wien (Fragment), Kopie eines Gemäldes aus dem 19. Jahrhundert<br>von Marcin Altomonte; Museum des Palastes von König Jan III.<br>in Wilanów, Foto von B. Seredyńska</p></div></div>
           
           <a id="przygotowanie"></a><h2 class="nag"> Vorbereitungen für den Kampf</h2> <div class="pdb">
               <div class="b2">
           <img src="Bitwa2.jpg" alt="Jan III Sobiecki" style="border-radius: 10px;" >
           <img src="Bitwa3.jpg" alt="Jan III Sobiecki" style="border-radius: 10px;">
       </div>
               <div class="tek">Die Vorbereitungen für die Schlacht bei Wien im Jahr 1683 waren äußerst kompliziert und erforderten die Bündelung vieler Kräfte, um die türkische Invasion in Mitteleuropa abzuwehren. Hier ist eine Beschreibung der Vorbereitungen für diese historische Schlacht:
           <br><br> 1. Türkische Bedrohung:<ul>
           <li>Das Osmanische Reich plante unter Großwesir Kara Mustafa die Eroberung Wiens als wichtigen Ausgangspunkt für die weitere Expansion nach Europa.</li>
           <li>Die Osmanen hatten Wien bereits seit Juli 1683 umzingelt, zerstörten die Stadt und verschärften nach und nach den Belagerungsring um sie herum.</li>
           </ul> 2. Verbündete:<ul>
           <li>Jan III. Sobieski, Großhetman der Krone der Republik Polen, führte das Bündnis gegen die türkische Invasion an. Er arbeitete eng mit Kaiser Leopold I. von Habsburg zusammen, der die Verteidigung Wiens befehligte.</li>
           <li>Dieses Bündnis war von entscheidender Bedeutung, da es die Kräfte Polens, Österreichs und anderer europäischer Länder zur Verteidigung ihrer gemeinsamen Interessen vereinte. </li>
           </ul>3. Mobilisierung von Truppen: <ul>
           <li>Jan III. Sobieski versammelte bedeutende Streitkräfte, um Wien zu unterstützen. Seine wichtigsten Streitkräfte waren die berühmten polnischen Husaren, die für ihren außergewöhnlichen Mut und ihre Kampffähigkeiten bekannt waren.</li>
           <li>Koalitionstruppen, bestehend aus polnischen, österreichischen und deutschen Soldaten sowie Truppen des Herzogs von Lothringen, konzentrierten sich in der Nähe von Wien.</li>
           </ul>4.Logistik und Lieferung:<ul>
           <li>Es ist erwähnenswert, dass die logistische Organisation ein Schlüsselelement der Vorbereitungen für die Schlacht war. Die Versorgung mit Nahrungsmitteln, Munition und anderen Vorräten war von entscheidender Bedeutung, um die Verteidiger Wiens zu unterstützen und die Hilfsmaßnahmen zu unterstützen.</li>
           </ul>
           <br>Die Vorbereitungen für die Schlacht um Wien erforderten viele Anstrengungen, die Zusammenarbeit verschiedener Länder und Organisationen sowie eine geschickte Führung. Diese Bemühungen führten zu einer entscheidenden Schlacht, die den Konflikt wendete und eine weitere Expansion des Osmanischen Reiches in Europa verhinderte.</div>
           </div>
       
           <a id="przebieg"></a><h2 class="nag">Der Verlauf der Schlacht</h2>
           <div class="wstep">
               <div class="tek">Die Schlacht bei Wien im Jahr 1683 ist ein Schlüsselereignis in der europäischen Geschichte, bei der die Truppen unter dem Kommando von Jan III. Sobieski einen Sieg über die türkische Armee errangen, die Wien belagerte. Diese Schlacht fand im Zusammenhang mit der Gefahr einer türkischen Invasion in Mitteleuropa statt.
               Die Belagerung Wiens durch die türkische Armee unter Großwesir Kara Mustafa dauerte seit Juli 1683 und die Lage für die Verteidiger wurde immer kritischer. Jan III. Sobieski beschloss im Bündnis mit Kaiser Leopold I. von Habsburg, Wien zu entlasten.
               Am 12. September 1683 führten polnische Husaren unter der Führung von Jan III. Sobieski einen heldenhaften Angriff auf türkische Stellungen durch. Der entscheidende Moment war, als die Husaren die feindlichen Linien überquerten, was zu Desorganisation und Panik unter den türkischen Truppen führte.
               Die Schlacht endete mit dem Sieg der Koalitionstruppen, der Wien vor der Eroberung durch die Türken bewahrte. Dieses Ereignis war von großer Bedeutung, da es die türkische Expansion nach Westen stoppte, das Osmanische Reich als expansive Macht in Europa schwächte und Johann III. Sobieski zum Nationalhelden machte. Die Schlacht um Wien stellte einen Wendepunkt in der europäischen Geschichte dar und beeinflusste den weiteren Verlauf der Ereignisse in der Region.</div> <div class="b4"><img class="zdj" src="Bitwa4.jpg" alt="Jan III Sobiecki"></div>
           </div>
           <a id="skutki"></a><h2 class="nag"> Die Auswirkungen der Schlacht </h2>
           <p class="tek">Die Schlacht bei Wien im Jahr 1683 hatte weitreichende Folgen sowohl für Europa als auch für das Osmanische Reich. Hier ist eine Beschreibung der wichtigsten Folgen dieser historischen Schlacht:
       
           <br>1.Wien retten:<br>
           
           Das offensichtlichste Ergebnis der Schlacht um Wien war die Rettung der Stadt selbst. Die Schlacht stoppte die türkische Invasion und rettete die Hauptstadt Österreichs vor der Eroberung durch das Osmanische Reich. Dadurch blieb Wien ein wichtiges kulturelles und politisches Zentrum Mitteleuropas.
           <br> 2. Stoppen der türkischen Expansion:<br>
           
          Die Schlacht um Wien stoppte den Fortschritt der türkischen Expansion nach Westen. Das Osmanische Reich verlor als expansive Macht in Europa an Bedeutung, was Auswirkungen auf die künftigen Grenzen und das Schicksal der europäischen Länder hatte.
           <br> 3. Die Moral der Europäer stärken:<br>
           
          Der Sieg bei Wien inspirierte andere europäische Länder zum Widerstand gegen die Osmanen. Dieser Kampf steigerte die Moral und das Vertrauen in die Fähigkeit, sich gegen die türkische Invasion zu verteidigen.
           <br> 4.Stärkung der Position Polens:<br>
           
          Der Sieg von Johann III. Sobieski in der Schlacht bei Wien machte Polen zu einem wichtigen Akteur auf der europäischen politischen Bühne. Der polnische König wurde zum Nationalhelden und erlangte Ansehen unter den europäischen Herrschern.
           <br> 5. Der Fall von Kara Mustafa:<br>
           
         Die Niederlage bei Wien hatte auch Konsequenzen im Osmanischen Reich. Kara Mustafa, der Großwesir, der die türkische Invasion anführte, wurde von Sultan Mehmed IV. als Strafe für das Scheitern hingerichtet.
           <br> 6. Weitere Konflikte:<br>
           
          Obwohl die Schlacht um Wien ein wichtiges Ereignis war, beendete sie den Konflikt zwischen Christen und Muslimen nicht vollständig. Die folgenden Jahre brachten weitere Zusammenstöße und Kriege zwischen ihnen mit sich, doch dieser Kampf markierte einen Wendepunkt in dieser langjährigen Rivalität.
           <br> Die Schlacht um Wien hatte nachhaltige Auswirkungen und prägte die Geschichte Europas und des Nahen Ostens. Die Rettung Wiens und die Eindämmung der türkischen Expansion hatten nicht nur militärisch-strategische Bedeutung, sondern auch kulturelle und politische Bedeutung, die den Verlauf der Geschichte in späteren Jahrhunderten beeinflusste.</p>
               `;
        } else {
           contentDiv.innerHTML = `<h1 class="name"> Bitwa pod Wiedniem - Jan III Sobiecki</h1>

    <a id="wstep"></a>
    <h2 class="nag"> Wstęp </h2>
  <div class="wstep">
        <div class="tek">W dniu 12 września 1683 roku, na terenie Wiednia, stolicy Austrii, rozegrała się jedna z najważniejszych bitew w historii Europy. Bitwa ta była kulminacyjnym momentem konfliktu między chrześcijaństwem a islamem oraz symbolem odwagi i determinacji obrony europejskiego kontynentu przed ekspansją Imperium Osmańskiego. Głównymi postaciami tego wydarzenia byli Jan III Sobieski, wielki hetman koronny Rzeczypospolitej Polskiej, cesarz Leopold I Habsburg, a także wielki wezyr Kara Mustafa z Imperium Osmańskiego. Bitwa pod Wiedniem jest jednym z najważniejszych epizodów w historii Polski i Europy, ponieważ przyczyniła się do ocalenia Wiednia i powstrzymania postępu tureckiej inwazji na zachodnią Europę. Kontekst historyczny tamtych czasów był zdominowany przez konflikty między chrześcijanami a muzułmanami, a także przez ekspansję tureckiego Imperium Osmańskiego w Europie. W obliczu zagrożenia dla Wiednia, Jan III Sobieski, wraz z sojusznikami, podjął decyzję o zorganizowaniu odsieczy wiedeńskiej, co zaowocowało decydującą bitwą. Warto zgłębić szczegóły tej epickiej konfrontacji, jej przebieg oraz znaczenie dla dalszych losów Europy i historii Polski.</div>
        <div class="b1"><img class="zdj" src="Bitwa1.jpg" alt="Bitwa pod Wiedniem (fragment), XIX-wieczna kopia obrazu Marcina Altomontego; Muzeum Pałacu Króla Jana III w Wilanowie, fot. B. Seredyńska">
    <p class="tek2">&nbsp;&nbsp;&nbsp;&nbsp;Bitwa pod Wiedniem (fragment), XIX-wieczna kopia obrazu<br> Marcina Altomontego; Muzeum Pałacu Króla Jana III <br>w Wilanowie, fot. B. Seredyńska</p></div></div>
    
    <a id="przygotowanie"></a><h2 class="nag"> Przygotowania do bitwy </h2> <div class="pdb">
        <div class="b2">
    <img src="Bitwa2.jpg" alt="Jan III Sobiecki" style="border-radius: 10px;" >
    <img src="Bitwa3.jpg" alt="Jan III Sobiecki" style="border-radius: 10px;">
</div>
        <div class="tek">Przygotowania do Bitwy pod Wiedniem w 1683 roku były niezwykle skomplikowane i angażowały wiele stron, które łączyły swoje siły w celu odparcia tureckiej inwazji na Europę Środkową. Oto opis przygotowań do tej historycznej bitwy:<br><br> 1. Zagrożenie tureckie:<ul><li>Imperium Osmańskie, pod wodzą wielkiego wezyra Kara Mustafy, planowało zdobycie Wiednia jako kluczowego punktu wyjścia do dalszej ekspansji w Europie.</li><li> Osmańczycy już od lipca 1683 roku otoczyli Wiedeń, prowadząc obłąkanie miasta i stopniowo zaciskając pierścień oblężniczy wokół niego.</li></ul>   2. Sojusznicy:<ul><li>Jan III Sobieski, wielki hetman koronny Rzeczypospolitej Polskiej, stanął na czele sojuszu przeciwko tureckiej inwazji. Współpracował ściśle z cesarzem Leopoldem I Habsburgiem, który dowodził obroną Wiednia.</li><li>Sojusz ten był kluczowy, ponieważ połączył siły Polski, Austrii i innych państw europejskich w obronie wspólnego interesu. </li></ul>3. Mobilizacja wojsk: <ul>  <li>Jan III Sobieski zebrał znaczne siły zbrojne w celu wsparcia Wiednia. Jego najważniejszymi siłami była słynna husaria polska, znana ze swojej niezwykłej odwagi i umiejętności bojowych.</li><li>Wojska koalicyjne w składzie polskich, austriackich i niemieckich żołnierzy oraz oddziałów księcia Lotaryngii, skoncentrowały się w okolicach Wiednia.       </li></ul>4. Logistyka i zaopatrzenie:<ul>  <li> Warto zaznaczyć, że organizacja logistyczna była kluczowym elementem przygotowań do bitwy. Zaopatrzenie w żywność, amunicję i inne zaopatrzenie było kluczowe, aby utrzymać obrońców Wiednia i wsparć odsiecz.</li></ul><br>Przygotowania do Bitwy pod Wiedniem wymagały wielu wysiłków, współpracy różnych państw i organizacji oraz umiejętnego dowodzenia. Te starania doprowadziły do decydującej bitwy, która odwróciła losy konfliktu i zapobiegła dalszej ekspansji Imperium Osmańskiego w Europie.</div>
    </div>

    <a id="przebieg"></a><h2 class="nag"> Przebieg bitwy </h2>
    <div class="wstep">
        <div class="tek">Bitwa pod Wiedniem w 1683 roku to kluczowe wydarzenie w historii Europy, w którym wojska pod dowództwem Jana III Sobieskiego odniosły zwycięstwo nad armią turecką, która oblegała Wiedeń. Bitwa ta miała miejsce w kontekście groźby inwazji tureckiej na Europę Środkową.<br> Oblężenie Wiednia przez armię turecką pod wodzą wielkiego wezyra Kara Mustafy trwało od lipca 1683 roku, a sytuacja stawała się coraz bardziej krytyczna dla obrońców. Jan III Sobieski, w sojuszu z cesarzem Leopoldem I Habsburgiem, zdecydował się na odsiecz Wiedniowi.<br>12 września 1683 roku husaria polska, prowadzona przez Jana III Sobieskiego, przeprowadziła heroiczny atak na pozycje tureckie. Kluczowym momentem było przekroczenie linii wroga przez husarię, co wywołało dezorganizację i panikę wśród wojsk tureckich.<br>Bitwa zakończyła się zwycięstwem wojsk koalicyjnych, co uratowało Wiedeń przed zdobyciem przez Turków. To wydarzenie miało ogromne znaczenie, ponieważ zatrzymało ekspansję turecką na zachód, osłabiło Imperium Osmańskie jako potęgę ekspansywną w Europie i uczyniło Jana III Sobieskiego bohaterem narodowym. Bitwa pod Wiedniem była punktem zwrotnym w historii Europy i wpłynęła na dalszy bieg wydarzeń w regionie.</div>
        <div class="b4"><img class="zdj" src="Bitwa4.jpg" alt="Jan III Sobiecki"></div>
    </div>
    <a id="skutki"></a><h2 class="nag"> Skutki bitwy </h2>
    <p class="tek">Bitwa pod Wiedniem w 1683 roku miała dalekosiężne skutki zarówno dla Europy, jak i dla Imperium Osmańskiego. Oto opis głównych skutków tej historycznej bitwy:

        <br>1. Ocalenie Wiednia:<br>
        
        Najbardziej oczywistym skutkiem bitwy pod Wiedniem było ocalenie samego miasta. Bitwa zatrzymała turecką inwazję i uratowała stolicę Austrii od zdobycia przez wojska Imperium Osmańskiego. Dzięki temu Wiedeń pozostała ważnym ośrodkiem kulturalnym i politycznym Europy Środkowej.
        <br> 2. Powstrzymanie ekspansji tureckiej:<br>
        
        Bitwa pod Wiedniem zatrzymała postęp tureckiej ekspansji na zachód. Imperium Osmańskie traciło na znaczeniu jako siła ekspansywna w Europie, co miało wpływ na przyszłe granice i losy państw europejskich.
        <br> 3. Podnoszenie morale Europejczyków:<br>
        
        Zwycięstwo pod Wiedniem stało się inspiracją dla innych państw europejskich do oporu przeciwko Osmanom. Bitwa ta podniosła morale i wiarę w możliwość obrony przed turecką inwazją.
        <br> 4. Wzmacnianie pozycji Polski:<br>
        
        Zwycięstwo Jana III Sobieskiego w bitwie pod Wiedniem uczyniło Polskę ważnym graczem na europejskiej scenie politycznej. Król polski stał się bohaterem narodowym i zyskał prestiż wśród władców europejskich.
        <br> 5. Upadek Kara Mustafy:<br>
        
        Klęska pod Wiedniem miała także konsekwencje w Imperium Osmańskim. Kara Mustafa, wielki wezyr, który dowodził turecką inwazją, został stracony przez sułtana Mehmeda IV jako kara za niepowodzenie.
        <br> 6. Dalsze konflikty:<br>
        
        Choć bitwa pod Wiedniem była ważnym wydarzeniem, to nie oznaczała całkowitego zakończenia konfliktu między chrześcijanami a muzułmanami. Kolejne lata przyniosły dalsze starcia i wojny między nimi, ale bitwa ta była punktem zwrotnym w tej długotrwałej rywalizacji.
        <br> Bitwa pod Wiedniem miała długotrwałe skutki, które kształtowały historię Europy i Bliskiego Wschodu. Ocalenie Wiednia i zatrzymanie tureckiej ekspansji miało znaczenie nie tylko militarno-strategiczne, ale także kulturowe i polityczne, które wpłynęły na bieg historii w wiekach późniejszych.</p>
       `;
        }
    });
});