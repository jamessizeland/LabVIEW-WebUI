/**********************
Currently this function is not dynamic, and must be modified by the developer for the particular widths
and number of columns that your tree control/indicator is comprised of. I plan to figure out how to make it
dynamic later.
*/

function treeColumnHandler(){
    document.getElementsByTagName('ni-tree')[0].setAttribute('column-widths','["120", "120", "120", "120", "120", "120"]');
}