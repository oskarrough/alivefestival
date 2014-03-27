<?php include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>
<?php perch_layout('global.top'); ?>

<div class="Box">
	<ul id="tabs" role="tablist" class="TabsNav">
		<li>
			<a id="tab1" href="#panel1" onclick="showTab(1);return false" role="tab" aria-controls="panel1" aria-selected="false">
				<h1 class="PageTitle"><span>
					<?php perch_content('Tab1 heading'); ?>
				</span></h1>
			</a>
		</li>
		<li>
			<a id="tab2" href="#panel2" onclick="showTab(2);return false" role="tab" aria-controls="panel2" aria-selected="false">
				<h1 class="PageTitle"><span>
					<?php perch_content('Tab2 heading'); ?>
				</span></h1>
			</a>
		</li>
	</ul>
	<div class="Tabs">
		<div id="panel1" role="tabpanel" aria-labelledby="tab1" class="Tabs-panel">
			<?php perch_content('Tab1 main'); ?>  
		</div>
		<div id="panel2" role="tabpanel" aria-labelledby="tab2" class="Tabs-panel">
			<?php perch_content('Tab2 main'); ?>
		</div>
	</div>
</div>

<?php perch_layout('global.footer'); ?>
